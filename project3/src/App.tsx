import './App.css'
import PhoneInput from './components/PhoneInput';
import { FormProvider, useFormContext } from './context/FormContext';

const FormContent = () => {
  const { user, updateUser, resetUser, isFormValid } = useFormContext();

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--background)' }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (isFormValid) {
            alert('Form submitted successfully!');
            resetUser();
          }
        }}
      >
        <div className="form-container">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="Name"
            value={user.name}
            onChange={(e) => updateUser({ name: e.target.value })}
            id="name"
          />
          <label htmlFor="phone">Phone</label>
          <PhoneInput
            placeholder="(555) 123-4567"
            id="phone"
          />
          <label htmlFor="age">Age</label>
          <input
            type="number"
            placeholder="Age"
            value={user.age}
            onChange={(e) => updateUser({ age: Number(e.target.value) })}
            id="age"
          />
          <label htmlFor="isEmployed" className="checkbox-label">
            <input
              type="checkbox"
              checked={user.isEmployed}
              onChange={(e) => updateUser({ isEmployed: e.target.checked })}
              id="isEmployed"
            />
            Are you employed?
          </label>
          <label htmlFor="salary">Salary</label>
          <select
            name="salary"
            id="salary"
            value={user.salary}
            onChange={(e) => updateUser({ salary: Number(e.target.value) })}
          >
            <option value="0">0</option>
            <option value="10000">10,000</option>
            <option value="20000">20,000</option>
            <option value="30000">30,000</option>
            <option value="40000">40,000</option>
            <option value="50000">50,000</option>
          </select>
        </div>
        <button type="submit" disabled={!isFormValid}>Submit</button>
      </form>
    </div>
  );
};

function App() {
  return (
    <FormProvider>
      <FormContent />
    </FormProvider>
  );
}

export default App
