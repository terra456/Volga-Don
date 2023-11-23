import { useForm, SubmitHandler } from 'react-hook-form';
import questionsImg from '../../assets/images/questions.png';
import { BASE_URL } from '../../utils/variables';

type QuestionForm = {
  first_name: string;
  last_name: string;
  phone: string;
  answered: true;
};

const QuestionFormSection = () => {
  const serverUrl = BASE_URL;
  const {
    register,
    handleSubmit,
    // formState: { errors },
    reset,
  } = useForm<QuestionForm>();

  const onSubmit: SubmitHandler<QuestionForm> = (data) => {
    (async () => {
      try {
        const answer = await fetch(`${serverUrl}/feedbacks/add/`, {
          body: JSON.stringify({ ...data, answered: true }),
          mode: 'cors',
          method: 'post',
          headers: { 'content-type': 'application/json' },
        });
        console.log(answer);
        if (answer.status === 201) {
          reset();
        }
      } catch (err) {
        console.log(err);
      }
    })();
  };

  return (
    <section className="section questions" id="questions">
      <h2 className="section__title">Остались вопросы?</h2>
      <div className="section__container questions__container">
        <img src={questionsImg} alt="" className="questions__img" />
        <form className="questions__form" onSubmit={handleSubmit(onSubmit)}>
          <p className="questions__form-title section__text">Оставьте заявку и мы перезвоним в течение 30&nbsp;минут</p>
          <input
            type="text"
            className="input-base"
            placeholder="Имя"
            {...register('first_name', { required: 'This is required.' })}
          />
          <input
            type="text"
            className="input-base"
            placeholder="Фамилия"
            {...register('last_name', { required: 'This is required.' })}
          />
          <input
            type="tel"
            className="input-base"
            placeholder="Телефон"
            {...register('phone', { required: 'This is required.' })}
          />
          <button type="submit" className="btn btn_arrow btn_type_questions">
            Отправить заявку
          </button>
        </form>
      </div>
    </section>
  );
};

export default QuestionFormSection;
