import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

const SignupPage = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (userData) => {
    console.log(userData);
    try {
      const response = await axios.post(
        "https://api-3wa-ecomm-524fde41edfa.herokuapp.com/api/signup",
        {
          nom: userData.nom,
          prenom: userData.prenom,
          age: parseInt(userData.age),
          address: {
            ville: userData.address.ville,
            postalCode: userData.address.postalCode,
            numeroRue: userData.address.numeroRue,
            nomRue: userData.address.nomRue,
          },
          email: userData.email,
          password: userData.password,
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error :", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Nom:
        <input type="text" name="nom" {...register("nom")} required />
      </label>
      <label>
        Prenom:
        <input type="text" name="prenom" {...register("prenom")} required />
      </label>
      <label>
        Age:
        <input type="number" name="age" {...register("age")} required />
      </label>
      <label>
        Ville:
        <input
          type="text"
          name="address.ville"
          {...register("address.ville")}
          required
        />
      </label>
      <label>
        Code postal:
        <input
          type="text"
          name="address.postalCode"
          {...register("address.postalCode")}
          required
        />
      </label>
      <label>
        N° de rue:
        <input
          type="text"
          name="address.numeroRue"
          {...register("address.numeroRue")}
          required
        />
      </label>
      <label>
        Nom de rue:
        <input
          type="text"
          name="address.nomRue"
          {...register("address.nomRue")}
          required
        />
      </label>
      <label>
        Email:
        <input type="email" name="email" {...register("email")} required />
      </label>
      <label>
        Mot de passe:
        <input
          type="password"
          name="password"
          {...register("password")}
          minLength={6}
          required
        />
      </label>
      <button>Sign Up</button>
    </form>
  );
};

export default SignupPage;
