const styles = {
  h1: {
    fontSize: "2.2rem",
    fontWeight: "bold",
    textAlign: "center" as const,
    marginTop: "2rem",
    marginBottom: "2rem",
    color: "var(--text)",
  },
  h2: {
    fontSize: "1.6rem",
    fontWeight: "bold",
    marginTop: "2rem",
    marginBottom: "1rem",
    color: "var(--text)",
  },
  text: {
    textAlign: "left" as const,
    fontSize: "1.1rem",
    lineHeight: 1.6,
    color: "var(--text)",
    marginBottom: "1rem",
  },
  container: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "20px",
    color: "var(--text)",
  },
  link: {
    color: "var(--accent)",
    textDecoration: "none",
    transition: "opacity 0.2s",
    ":hover": {
      opacity: 0.8,
    },
  },
  bold: {
    fontWeight: "bold",
    display: "inline-block",
    marginRight: "0.5rem",
  },
  listItem: {
    marginLeft: "1rem",
    marginBottom: "0.5rem",
    display: "block",
  },
  section: {
    marginBottom: "2rem",
  },
  definitions: {
    display: "grid",
    gap: "0.5rem",
  },
  term: {
    display: "block",
    marginBottom: "0.5rem",
  },
};

export default function Terms() {
  return (
    <div style={styles.container}>
      <h1 style={styles.h1}>Правила использования</h1>

      <section style={styles.section}>
        <h2 style={styles.h2}>1. Общие положения</h2>
        <p style={styles.text}>
          1.1. Настоящие Правила использования (далее — «Правила») регулируют
          порядок доступа и использования веб-сайта{" "}
          <a href="https://dota-predictions.ru" style={styles.link}>
            https://dota-predictions.ru
          </a>{" "}
          (далее — «Сайт»), принадлежащего администрации сайта (далее —
          «Администрация»).
        </p>
        <p style={styles.text}>
          1.2. Используя Сайт, Пользователь подтверждает, что ознакомился с
          настоящими Правилами, понимает их содержание и безоговорочно принимает
          все условия.
        </p>
        <p style={styles.text}>
          1.3. Если Пользователь не согласен с условиями настоящих Правил, он
          обязан немедленно прекратить использование Сайта.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>2. Термины и определения</h2>
        <div style={styles.definitions}>
          <span style={styles.term}>
            <strong style={styles.bold}>Пользователь</strong> — любое физическое
            лицо, посещающее Сайт и/или использующее его функционал.
          </span>
          <span style={styles.term}>
            <strong style={styles.bold}>Администрация</strong> — уполномоченные
            лица, владеющие и управляющие Сайтом.
          </span>
          <span style={styles.term}>
            <strong style={styles.bold}>Контент</strong> — любые материалы,
            размещенные на Сайте, включая тексты, изображения, данные, прогнозы,
            графику и программные элементы.
          </span>
          <span style={styles.term}>
            <strong style={styles.bold}>Сервис</strong> — функциональные
            возможности Сайта, включая систему прогнозирования матчей, историю
            прогнозов и иные инструменты.
          </span>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>3. Предмет соглашения</h2>
        <p style={styles.text}>
          3.1. Администрация предоставляет Пользователю доступ к Сайту и его
          функционалу в соответствии с настоящими Правилами.
        </p>
        <p style={styles.text}>
          3.2. Сайт предназначен исключительно для информационных и
          развлекательных целей.
        </p>
        <p style={styles.text}>
          3.3. Прогнозы, результаты и иная аналитическая информация не являются
          достоверными данными, инвестиционными рекомендациями или предложением
          заключить пари.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>4. Права и обязанности Пользователя</h2>
        <p style={styles.text}>4.1. Пользователь имеет право:</p>
        <div style={styles.listItem}>
          <span style={styles.text}>
            – свободно использовать Сайт в пределах, предусмотренных
            функционалом;
          </span>
          <span style={styles.text}>
            – обращаться в Администрацию с предложениями, вопросами и жалобами;
          </span>
          <span style={styles.text}>
            – прекращать использование Сайта в любое время.
          </span>
        </div>

        <p style={styles.text}>4.2. Пользователь обязуется:</p>
        <div style={styles.listItem}>
          <span style={styles.text}>
            – использовать Сайт только в законных целях;
          </span>
          <span style={styles.text}>
            – не предпринимать действий, направленных на нарушение
            работоспособности Сайта;
          </span>
          <span style={styles.text}>
            – не использовать автоматические скрипты, парсеры или иные средства
            для сбора данных;
          </span>
          <span style={styles.text}>
            – не размещать материалы, нарушающие авторские права, нормы морали,
            законодательства РФ или иных стран.
          </span>
        </div>

        <p style={styles.text}>
          4.3. Пользователь несет полную ответственность за все действия,
          совершенные с использованием его устройств и учетных данных.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>5. Права и обязанности Администрации</h2>
        <p style={styles.text}>5.1. Администрация вправе:</p>
        <div style={styles.listItem}>
          <span style={styles.text}>
            – изменять функционал Сайта, интерфейс и структуру без
            предварительного уведомления;
          </span>
          <span style={styles.text}>
            – временно или навсегда ограничивать доступ Пользователя к Сайту при
            нарушении Правил;
          </span>
          <span style={styles.text}>
            – удалять контент, нарушающий требования законодательства или
            настоящих Правил;
          </span>
          <span style={styles.text}>
            – собирать и обрабатывать технические данные о действиях
            Пользователя для улучшения работы сервиса.
          </span>
        </div>

        <p style={styles.text}>5.2. Администрация обязуется:</p>
        <div style={styles.listItem}>
          <span style={styles.text}>
            – обеспечивать надлежащую работу Сайта, за исключением случаев
            технических сбоев, хакерских атак или форс-мажора;
          </span>
          <span style={styles.text}>
            – соблюдать Политику конфиденциальности и не передавать персональные
            данные третьим лицам, кроме случаев, предусмотренных законом.
          </span>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>6. Интеллектуальная собственность</h2>
        <p style={styles.text}>
          6.1. Все элементы дизайна, программный код, текстовые материалы,
          логотипы и иные объекты, размещенные на Сайте, являются
          интеллектуальной собственностью Администрации или правообладателей.
        </p>
        <p style={styles.text}>
          6.2. Запрещается копировать, воспроизводить, распространять или
          публиковать материалы Сайта без письменного разрешения Администрации.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>7. Ответственность сторон</h2>
        <p style={styles.text}>
          7.1. Сайт и все предоставляемые материалы предоставляются «как есть»
          («as is»), без гарантий любого рода.
        </p>
        <p style={styles.text}>
          7.2. Администрация не несет ответственности за:
        </p>
        <div style={styles.listItem}>
          <span style={styles.text}>
            – любые убытки, возникшие в результате использования или
            невозможности использования Сайта;
          </span>
          <span style={styles.text}>
            – неточность или ошибочность прогнозов;
          </span>
          <span style={styles.text}>
            – действия третьих лиц, повлекшие сбои в работе Сайта.
          </span>
        </div>
        <p style={styles.text}>
          7.3. Пользователь несет ответственность за соблюдение законодательства
          при использовании Сайта.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>8. Обработка персональных данных</h2>
        <p style={styles.text}>
          8.1. Обработка персональных данных осуществляется в соответствии с
          Политикой конфиденциальности.
        </p>
        <p style={styles.text}>
          8.2. Пользователь соглашается на сбор и обработку своих данных
          (включая IP-адрес, cookie, историю запросов) в целях функционирования
          Сайта.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>9. Изменения правил</h2>
        <p style={styles.text}>
          9.1. Администрация оставляет за собой право изменять настоящие Правила
          в любое время без предварительного уведомления Пользователя.
        </p>
        <p style={styles.text}>
          9.2. Актуальная версия Правил всегда доступна на Сайте. Продолжение
          использования Сайта означает согласие Пользователя с изменениями.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>10. Применимое право</h2>
        <p style={styles.text}>
          10.1. Настоящие Правила регулируются законодательством Российской
          Федерации.
        </p>
        <p style={styles.text}>
          10.2. Все споры, возникающие в связи с использованием Сайта, подлежат
          рассмотрению в суде по месту нахождения Администрации.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>11. Контактная информация</h2>
        <p style={styles.text}>
          Для связи с Администрацией используйте электронную почту:{" "}
          <a href="mailto:support@dota-predictions.ru" style={styles.link}>
            support@dota-predictions.ru
          </a>
        </p>
      </section>
    </div>
  );
}
