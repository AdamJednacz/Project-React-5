import React from 'react';
import Input from "./reusable_components/Input";

const Contact_form = () => {
  return (
    <form>
      <Input type={'text'} placeholder={''} label={'Name'}/>
      <Input type={'text'} placeholder={''} label={'Surname'}/>
      <Input type={'email'} placeholder={''} label={'E-mail'}/>
      <Input type={'number'} placeholder={''} label={'Phone'}/>
    </form>
  );
};

export default Contact_form;
