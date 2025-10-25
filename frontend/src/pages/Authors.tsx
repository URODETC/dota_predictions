import "./Authors.css";

export default function Authors() {
  return (
    <div className="authors-container">
      <h1 className="text-center mb-5">Наша команда</h1>

      <div className="authors-row">
        <div className="author-column">
          <div className="card">
            <img
              src="../../assets/images/toxa.png"
              className="card-img-top"
              alt="Фото автора 1"
            />
            <div className="card-body">
              <h5 className="card-title">Urodetc</h5>
              <p className="card-text">Тоблер Антон</p>
              <p className="card-text">
                Крутой мужик. По настоящему гений программирования и кодинга.
                Было бы ему лет 20, за ним бы Google, Apple, Microsoft объявили
                охоту. Он - тот человек, который идет до конца к своей цели и
                обязательно добивается ее. Антон - настоящий гений нашего мира и
                одни из лучших программистов современности. Им будут
                вдохновляться дети, взрослые и старики, его коды и решения багов
                буду преподаваться в университетах. Он станет основой новой
                истории программирования и переосмыслит его суть. Таких людей
                уважают просто за их существование и должны нести им вечный
                почет и славу. Врядли я бы нашел человека умнее чем Антон, и это
                правда. Он - новый Эйнштейн, Тьюринг, Ньютон. Антон - имя,
                которое войдет в историю не только программирования, но и всей
                науки в целом.
              </p>
              <div className="social-links">
                <a href="https://github.com/URODETC" className="me-2">
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="https://steamcommunity.com/id/urodetc/"
                  className="me-2"
                >
                  <i className="fa-brands fa-steam"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="author-column">
          <div className="card">
            <img
              src="../../assets/images/maxim.png"
              className="card-img-top"
              alt="Фото автора 2"
            />
            <div className="card-body">
              <h5 className="card-title">Maxmango12</h5>
              <p className="card-text">Жалненков Максим</p>
              <p className="card-text">
                Крутой мужик. Человек, чьё имя навсегда изменило ход
                человеческой цивилизации, его идеи опережают время на
                десятилетия. Ему не нужно писать код - код сам пишет себя, лишь
                завидев его за клавиатурой. Если бы гении прошлого знали, что
                когда-нибудь появится такой ум, они бы перестали считать себя
                вершиной эволюции интелекта. Легенды гласят, что однажды Максим
                за одну ночь написал абсолютно новый, совершенный алгоритм
                сортировки в 2 строчки кода. С тех пор специалисты из OpenAi,
                Google, Nasa ежедневно разбирают эти 2 строчки, пытаясь понять
                хоть тень его гениальности. Максим — это не просто человек, это
                символ того, чего может достичь человеческий разум. Его наследие
                будет жить веками, а его идеи станут фундаментом новой цифровой
                эпохи. Его имя уже вписано в будущее человечества.
              </p>
              <div className="social-links">
                <a href="https://github.com/max12G" className="me-2">
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="https://steamcommunity.com/id/ssssdsa"
                  className="me-2"
                >
                  <i className="fa-brands fa-steam"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
