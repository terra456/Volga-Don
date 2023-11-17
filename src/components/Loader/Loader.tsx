import loader from '../../assets/images/icons/loader.svg';

const Loader = () => {
  return (
    <div className="loader__conteiner">
      <div>
        <img className="loader" src={loader}></img>
      </div>
    </div>
  );
};

export default Loader;
