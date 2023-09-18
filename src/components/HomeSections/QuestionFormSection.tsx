import questionsImg from '../../assets/images/questions.png';

const QuestionFormSection = () => {
  return (
    <section className="section questions" id="questions">
      <h2 className="section__title">Остались вопросы?</h2>
      <div className="section__container section__container_type_questions">
        <img src={questionsImg} alt="" className="questions__img" />
        <form className="questions__form">
          <p className="questions__form-title">Оставьте заявку, и мы перезвоним в течение 30 минут</p>
          <input
            type="text"
            className="base-input base-input_type_name questions__form-input-name"
            placeholder="Имя"
            required
          />
          <input
            type="text"
            className="base-input base-input_type_surname questions__form-input-surname"
            placeholder="Фамилия"
            required
          />
          <input
            type="tel"
            className="base-input base-input_type_phone questions__form-input-number"
            placeholder="Телефон"
            required
          />
          <button type="submit" className="btn btn_type_questions">
            Отправить заявку
          </button>
        </form>
      </div>
    </section>
  );
};

export default QuestionFormSection;
