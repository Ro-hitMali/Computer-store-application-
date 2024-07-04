// import React, { useEffect } from 'react';
// import { useAppSelector, useAppDispatch } from '../../hooks';
// import { fetchData, selectData, selectStatus } from './dataSlice';

// const DataView: React.FC = () => {
//   const dispatch = useAppDispatch();
//   const data = useAppSelector(selectData);
//   const status = useAppSelector(selectStatus);

//   useEffect(() => {
//     dispatch(fetchData());
//   }, [dispatch]);

//   useEffect(() => {
//     console.log(data);
//   }, [data]);

//   if (status === 'loading') {
//     return <div>Loading...</div>;
//   }

//   if (status === 'failed') {
//     return <div>Failed to load data</div>;
//   }

//   return (
//     <div>
//       <h1>Data</h1>
//       <pre>{JSON.stringify(data, null, 2)}</pre>
//     </div>
//   );
// };

// export default DataView;
