from __future__ import annotations

import argparse
import json
import sys


def cmd_list() -> None:
    from pipeline.storage import get_storage
    storage = get_storage()
    versions = storage.list_versions()
    current = storage.get_production_version()

    print(f"{'VERSION':<22} {'STATUS':<12} {'ACCURACY':<10} {'BRIER':<8} {'CREATED'}")
    print('-'*80)
    for v in versions:
        ver    = v.get("version", "?")
        status = v.get("status", "?")
        acc = v.get("metrics", {}).get("accuracy", "-")
        brier = v.get("metrics", {}).get("brier", "-")
        ts = (v.get("created_at") or "")[:19]
        marker = " ← current" if ver == current else ""
        print(f"{ver:<22} {status:<12} {str(acc):<10} {str(brier):<8} {ts}{marker}")

def cmd_rollback(version: str | None) -> None:
    from pipeline.storage import get_storage
    storage = get_storage()

    if version is None:
        versions = storage.list_versions()
        current  = storage.get_production_version()
        prev = next(
            (v["version"] for v in versions
             if v["version"] != current and v.get("status") in ("production", "archived")),
            None,
        )
        if prev is None:
            print("Нет предыдущей версии для отката.", file=sys.stderr)
            sys.exit(1)
        version = prev

    print(f"Откат на версию: {version}")
    meta = storage.rollback(version)
    print(f"✅ production → {version}")
    print(json.dumps(meta, indent=2, default=str))


if __name__ == "__main__":
    import logging
    logging.basicConfig(level=logging.INFO, format="%(levelname)s %(message)s")

    parser = argparse.ArgumentParser(description="Model version management")
    parser.add_argument("--list",    action="store_true",  help="Показать все версии")
    parser.add_argument("--version", default=None,         help="Версия для отката")
    args = parser.parse_args()

    if args.list:
        cmd_list()
    else:
        cmd_rollback(args.version)
