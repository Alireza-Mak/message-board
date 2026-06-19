import { useState } from 'react';

type EditMessageFormProps = {
  messageText: string;
  modifyMessage: (modifiedText: string) => void;
};

const EditMessageForm = ({ messageText, modifyMessage }: EditMessageFormProps) => {

  const [ modifiedText, setModifiedText] = useState(messageText);
  
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    modifyMessage(modifiedText);
  }

  return (
    <form onSubmit={handleFormSubmit}>
        <input type='text'
          value={modifiedText}
          onChange={event => setModifiedText(event.target.value)}
        />
    </form>
  );
}

export default EditMessageForm;
