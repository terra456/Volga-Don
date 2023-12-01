import AddUserForm from '../../../admin/components/AddUserForm';

const AddUser = () => {
  return (
    <section className="admin-form-section">
      <h2 className="admin-title admin-title_new-user">Добавить нового сотрудника</h2>
      <AddUserForm />;
    </section>
  );
};

export default AddUser;
