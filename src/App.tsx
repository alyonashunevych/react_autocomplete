import React, { useState } from 'react';
import './App.scss';
import { Dropdown } from './components/Dropdown';
import { peopleFromServer } from './data/people';

export const App: React.FC = () => {
  const [personId, setPersonId] = useState<number>();
  const selectedPerson = personId ? peopleFromServer[personId] : undefined;
  const name = selectedPerson?.name;
  const born = selectedPerson?.born;
  const died = selectedPerson?.died;

  return (
    <div className="container">
      <main className="section is-flex is-flex-direction-column">
        <h1 className="title" data-cy="title">
          {personId ? `${name} (${born} - ${died})` : 'No selected person'}
        </h1>

        <Dropdown
          delay={300}
          onSelected={id => {
            setPersonId(id);
          }}
        />
      </main>
    </div>
  );
};
