#!/usr/bin/env python3

import argparse
import uvicorn


def main():
    parser = argparse.ArgumentParser(
        description="Run FastAPI backend (backend/main.py)"
    )
    parser.add_argument("--host", default="127.0.0.1", help="Host to bind to")
    parser.add_argument("--port", type=int, default=8000, help="Port to listen on")
    parser.add_argument(
        "--reload",
        action="store_true",
        help="Enable auto-reload (useful in development)",
    )
    parser.add_argument("--log-level", default="info", help="Uvicorn log level")
    args = parser.parse_args()

    app_path = "backend.main:app"
    uvicorn.run(
        app_path,
        host=args.host,
        port=args.port,
        reload=args.reload,
        log_level=args.log_level,
    )


if __name__ == "__main__":
    main()
