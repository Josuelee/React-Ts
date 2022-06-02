import { ChangeEvent, useState } from "react";
import { useForm } from "../hooks/useForm";

const initialForm = {
  postalCode: "",
  city: "",
};

const Form = () => {
  const { form, handleChange, postalCode, city } = useForm(initialForm);

  return (
    <form autoComplete="off">
      <div className="mb-3">
        <label className="form-label">Postal Code: </label>
        <input
          type="text"
          className="form-control"
          name="postalCode"
          value={postalCode}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">City: </label>
        <input
          type="text"
          className="form-control"
          name="city"
          value={city}
          onChange={handleChange}
        />
      </div>

      <pre>{JSON.stringify(form)}</pre>
    </form>
  );
};
export default Form;
