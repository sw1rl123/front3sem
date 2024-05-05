import { useState } from 'react';
import { Table, Button } from 'antd';
import { SubmitHandler, useForm } from 'react-hook-form';
import { columns as tableColumns, data as tableData } from './TableData';

interface IMyForm {
  name: string;
  age: number;
}

const pageSize = 10;

const TableComponent: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [tasks, setTasks] = useState<IMyForm[]>([]);

  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const displayedData = tableData.slice(startIndex, endIndex);

  const saveElement: SubmitHandler<IMyForm> = (data, event) => {
    setTasks((prev) => [...prev, data]);
    event?.target.reset();
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IMyForm>({
    mode: "onBlur",
  });

  const isFormValid = Object.keys(errors).length === 0;

  return (
    <div>
      <h1>Таблица</h1>
      <Table columns={tableColumns} dataSource={displayedData} />
      <Button onClick={handlePrevPage} disabled={currentPage === 1}>
        Назад
      </Button>
      <span style={{ margin: '0 10px' }}>Страница {currentPage}</span>
      <Button onClick={handleNextPage}>
        Вперёд
      </Button>

      <form onSubmit={handleSubmit((data, event) => saveElement(data, event))}>
        <input
          {...register("name", {
            required: "Поле обязательно для заполнения",
            minLength: {
              value: 5,
              message: "Нужно больше символов, не менее 5",
            },
          })}
        />
        <div>{errors.name?.message}</div>
        <input
          {...register("age", {
            required: "Поле обязательно для заполнения",
            minLength: {
              value: 10,
              message: "Нужно больше символов, не менее 10",
            },
          })}
        />
        <div>{errors.age?.message}</div>
        <button type="submit" disabled={!isFormValid}>
          Сохранить
        </button>
        {tasks.map((task, index) => (
          <p key={index}>
            {task.name} - {task.age}
          </p>
        ))}
      </form>
    </div>
  );
}

export default TableComponent;
