import React, { useState } from 'react';
import { Space, Table, Button, Tag } from 'antd';
import { ColumnsType } from 'antd/lib/table';

const { Column, ColumnGroup } = Table;

interface DataType {
  key: React.Key;
  firstName: string;
  lastName: string;
  age: number;
  address: string;
  tags: string[];
}

const pageSize = 10;

const columns: ColumnsType<DataType> = [
  {
    title: 'Имя',
    dataIndex: 'firstName',
    key: 'firstName',
  },
  {
    title: 'Фамилия',
    dataIndex: 'lastName',
    key: 'lastName',
  },
  {
    title: 'Возраст',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Адрес',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    dataIndex: 'tags',
    key: 'tags',
  }
];

const data: DataType[] = [
  {
    key: '1',
    firstName: 'Alex',
    lastName: 'Pyshkin',
    age: 37,
    address: 'Moscow, The Russian Empire',
    tags: ['writer'],
  },
  {
    key: '2',
    firstName: 'Vasiliy',
    lastName: 'Basta',
    age: 43,
    address: 'Russia, Rostov-Na-Dony',
    tags: ['singer'],
  },
  {
    key: '3',
    firstName: 'Vlad',
    lastName: 'Bymaga',
    age: 21,
    address: 'Moscow',
    tags: ['loser'],
  },
  {
    key: '4',
    firstName: 'Alex',
    lastName: 'Pyshkin',
    age: 37,
    address: 'Moscow, The Russian Empire',
    tags: ['writer'],
  },
  {
    key: '5',
    firstName: 'Vasiliy',
    lastName: 'Basta',
    age: 43,
    address: 'Russia, Rostov-Na-Dony',
    tags: ['singer'],
  },
  {
    key: '6',
    firstName: 'Vlad',
    lastName: 'Bymaga',
    age: 21,
    address: 'Moscow',
    tags: ['loser'],
  },
  {
    key: '7',
    firstName: 'Alex',
    lastName: 'Pyshkin',
    age: 37,
    address: 'Moscow, The Russian Empire',
    tags: ['writer'],
  },
  {
    key: '8',
    firstName: 'Vasiliy',
    lastName: 'Basta',
    age: 43,
    address: 'Russia, Rostov-Na-Dony',
    tags: ['singer'],
  },
  {
    key: '9',
    firstName: 'Vlad',
    lastName: 'Bymaga',
    age: 21,
    address: 'Moscow',
    tags: ['loser'],
  },
  {
    key: '10',
    firstName: 'Alex',
    lastName: 'Pyshkin',
    age: 37,
    address: 'Moscow, The Russian Empire',
    tags: ['writer'],
  },
  {
    key: '11',
    firstName: 'Vasiliy',
    lastName: 'Basta',
    age: 43,
    address: 'Russia, Rostov-Na-Dony',
    tags: ['singer'],
  },
  {
    key: '12',
    firstName: 'Vlad',
    lastName: 'Bymaga',
    age: 21,
    address: 'Moscow',
    tags: ['loser'],
  },
  {
    key: '13',
    firstName: 'Alex',
    lastName: 'Pyshkin',
    age: 37,
    address: 'Moscow, The Russian Empire',
    tags: ['writer'],
  },
  {
    key: '14',
    firstName: 'Vasiliy',
    lastName: 'Basta',
    age: 43,
    address: 'Russia, Rostov-Na-Dony',
    tags: ['singer'],
  },
  {
    key: '15',
    firstName: 'Vlad',
    lastName: 'Bymaga',
    age: 21,
    address: 'Moscow',
    tags: ['loser'],
  },
  {
    key: '16',
    firstName: 'Alex',
    lastName: 'Pyshkin',
    age: 37,
    address: 'Moscow, The Russian Empire',
    tags: ['writer'],
  },
  {
    key: '17',
    firstName: 'Vasiliy',
    lastName: 'Basta',
    age: 43,
    address: 'Russia, Rostov-Na-Dony',
    tags: ['singer'],
  },
  {
    key: '18',
    firstName: 'Vlad',
    lastName: 'Bymaga',
    age: 21,
    address: 'Moscow',
    tags: ['loser'],
  },
  {
    key: '19',
    firstName: 'Alex',
    lastName: 'Pyshkin',
    age: 37,
    address: 'Moscow, The Russian Empire',
    tags: ['writer'],
  },
  {
    key: '20',
    firstName: 'Vasiliy',
    lastName: 'Basta',
    age: 43,
    address: 'Russia, Rostov-Na-Dony',
    tags: ['singer'],
  },
  {
    key: '21',
    firstName: 'Vlad',
    lastName: 'Bymaga',
    age: 21,
    address: 'Moscow',
    tags: ['loser'],
  },
  {
    key: '22',
    firstName: 'Alex',
    lastName: 'Pyshkin',
    age: 37,
    address: 'Moscow, The Russian Empire',
    tags: ['writer'],
  },
  {
    key: '23',
    firstName: 'Vasiliy',
    lastName: 'Basta',
    age: 43,
    address: 'Russia, Rostov-Na-Dony',
    tags: ['singer'],
  },
  {
    key: '24',
    firstName: 'Vlad',
    lastName: 'Bymaga',
    age: 21,
    address: 'Moscow',
    tags: ['loser'],
  },
  {
    key: '25',
    firstName: 'Alex',
    lastName: 'Pyshkin',
    age: 37,
    address: 'Moscow, The Russian Empire',
    tags: ['writer'],
  },
  {
    key: '26',
    firstName: 'Vasiliy',
    lastName: 'Basta',
    age: 43,
    address: 'Russia, Rostov-Na-Dony',
    tags: ['singer'],
  },
  {
    key: '27',
    firstName: 'Vlad',
    lastName: 'Bymaga',
    age: 21,
    address: 'Moscow',
    tags: ['loser'],
  },
  {
    key: '28',
    firstName: 'Alex',
    lastName: 'Pyshkin',
    age: 37,
    address: 'Moscow, The Russian Empire',
    tags: ['writer'],
  },
  {
    key: '29',
    firstName: 'Vasiliy',
    lastName: 'Basta',
    age: 43,
    address: 'Russia, Rostov-Na-Dony',
    tags: ['singer'],
  },
  {
    key: '30',
    firstName: 'Vlad',
    lastName: 'Bymaga',
    age: 21,
    address: 'Moscow',
    tags: ['loser'],
  },
];

const App: React.FC = () => {
  
    const [currentPage, setCurrentPage] = useState(1);
  
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
    const displayedData = data.slice(startIndex, endIndex);

    return (

      <div>
        <h1>Таблица</h1>

        <Table columns={columns} dataSource={displayedData} />
  
        <Button onClick={handlePrevPage} disabled={currentPage === 1}>
          Назад
        </Button>
        <span style={{ margin: '0 10px' }}>Страница {currentPage}</span>
        <Button onClick={handleNextPage}>
          Вперёд
        </Button>

      </div>
    );
}
export default App;