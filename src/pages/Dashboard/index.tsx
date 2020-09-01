import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/28912346?s=400&u=568eca1319e841dcfdf75f034056810e69463c81&v=4"
            alt="Luís Serrante"
          />
          <div>
            <strong>Serrante/bootcamp-gostack-desafios</strong>
            <p>
              Repositório contendo todos os desafios dos módulos do Bootcamp
              Gostack
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/28912346?s=400&u=568eca1319e841dcfdf75f034056810e69463c81&v=4"
            alt="Luís Serrante"
          />
          <div>
            <strong>Serrante/bootcamp-gostack-desafios</strong>
            <p>
              Repositório contendo todos os desafios dos módulos do Bootcamp
              Gostack
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/28912346?s=400&u=568eca1319e841dcfdf75f034056810e69463c81&v=4"
            alt="Luís Serrante"
          />
          <div>
            <strong>Serrante/bootcamp-gostack-desafios</strong>
            <p>
              Repositório contendo todos os desafios dos módulos do Bootcamp
              Gostack
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
