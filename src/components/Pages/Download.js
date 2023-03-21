import React from 'react';
import { CSVLink } from 'react-csv';
import { useSelector } from 'react-redux';


const DownloadButton = () => {

const data = useSelector(state=>state.expense.expenses)

  return (
    <div className='bg-blue-900 pl-5'>
    <CSVLink data={data} headers={['amount', 'category', 'description']}>
      <button>Download CSV</button>
    </CSVLink>
    </div>
  );
};

export default DownloadButton;