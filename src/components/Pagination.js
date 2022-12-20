import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import useUpdateWidth from '../utils/useUpdateWidth';
import { motion } from 'framer-motion';
import Button from './Button';

const Pagination = ({ setPageNumber, pageNumber, info, results }) => {
  const width = useUpdateWidth();

  //function to handle the page change
  const handlePageChange = (data) => {
    setPageNumber(data.selected + 1)
  }

  /////--(maximum characters displayed per page = 20)--\\\\
  ///////////////////////////////////////////////
  ///////////////////////////////////////////////
  /////--NEXT BUTTON becomes Display hidden when:
  /////--we are on the last page, --------------------> pageNumber === info.pages
  /////--the characters search returns 0, ------------> !results
  /////--the characters search is less than 20 -------> info.count < 21
  ///////////////////////////////////////////////////////////////////////////////
  /////--BACK BUTTON becomes Display hidden when:
  /////--we are on the first page --------------------> pageNumber === 1
  /////--the characters search returns 0 -------------> !results
  /////--the characters search is less then 20 -------> info.count < 21 




  ////////////////////////////////////////////////////////////////////////////
  ///////////////////////////PAGINATION COMPONENT FOR MOBILE, TABLET VIEWPORT
  return (
    <>
      <div className='lg:hidden '>
        <ReactPaginate
          nextLabel=
          {
            <Button
              value='next'
              color='bg-rick_blue'
              className={`${pageNumber === info?.pages || !results || info?.count < 21 ? 'hidden' : ''} px-8 w-screen`}
            />
          }
          previousLabel=
          {
            <Button
              value='back'
              color='bg-rick_blue'
              className={`${pageNumber === 1 ? 'hidden' : !results ? 'hidden' : null} px-8 w-screen`}
            />
          }

          className='flex flex-col justify-center gap-5 items-center font-magra font-bold  '
          forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
          pageCount={info?.pages}
          onPageChange={handlePageChange}
          breakClassName={'hidden md:block'}
          breakLinkClassName={'hidden md:block'}
          pageClassName=''
          pageLinkClassName={'hidden'}
          previousLinkClassName=''
          activeClassName='hidden'
          marginPagesDisplayed={'hidden'}
          pageRangeDisplayed={'hidden'}
        />
        <ReactPaginate
          className=' flex gap-8 md:gap-16 items-center justify-center py-4'
          forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
          nextLabel=''
          previousLabel=''
          pageCount={info?.pages}
          onPageChange={handlePageChange}
          breakClassName={'hidden'}
          breakLinkClassName={'hidden'}
          pageClassName='text-2xl'
          pageLinkClassName={''}
          previousLinkClassName=''
          activeClassName={'font-bold text-rick_lightGreen text-4xl flex   '}
          marginPagesDisplayed={pageNumber === 38 || pageNumber === 5 ? 1 : 2}
          pageRangeDisplayed={1}
        />
      </div>




      {/* //////////////////////////////////////////////////////////////////// */}
      {/* ///////////////////////////PAGINATION COMPONENT FOR DESKTOP VIEWPORT */}
      <div className='hidden lg:block'>
        <ReactPaginate
          nextLabel=
          {
            <Button
              value='next'
              color='bg-rick_blue'
              className={`${pageNumber === info?.pages || !results || info?.count < 21 ? 'hidden' : ''} px-8`}
            />
          }
          previousLabel=
          {
            <Button
              value='back'
              color='bg-rick_blue'
              className={`${pageNumber === 1 ? 'hidden' : !results ? 'hidden' : null} px-8`}
            />
          }
          className='flex justify-center gap-5 items-center font-magra font-bold  '
          forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
          pageCount={info?.pages}
          onPageChange={handlePageChange}
          breakClassName={''}
          breakLinkClassName={''}
          pageClassName={'text-center px-2 text-2xl '}
          pageLinkClassName={''}
          activeClassName={'font-bold text-rick_lightGreen text-4xl'}
          marginPagesDisplayed={width < 576 ? 1 : 2}
          pageRangeDisplayed={width < 576 ? 1 : 2}
        />
      </div>
    </>
  )
}

export default Pagination