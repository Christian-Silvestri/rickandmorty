import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ setPageNumber, pageNumber, info }) => {
  const [width, setWidth] = useState(window.innerWidth)


  //Set the length of the pagination bar responsively based on the viewport
  const updateDimension = () => {
    setWidth(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', updateDimension);
    return () => window.removeEventListener('resize', updateDimension);
  }, [])

  //function to handle the page change
  const handlePageChange = (data) => {
    setPageNumber(data.selected + 1)
  }


  return (
    <>
      <ReactPaginate
        className='flex justify-center gap-5 items-center font-magra font-bold  '
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        nextLabel='NEXT'
        previousLabel='BACK'
        pageCount={info?.pages}
        onPageChange={handlePageChange}
        breakClassName={'hidden md:block'}
        breakLinkClassName={'hidden md:block'}
        pageClassName={'text-center px-2 text-xl '}
        pageLinkClassName={''}
        previousClassName={'flex justify-center'}
        previousLinkClassName={`${pageNumber === 1 ? 'bg-zinc-700 text-gray-500/90 cursor-default' : 'bg-rick_blue'}  
        text-2xl rounded-md py-2 w-full text-center px-3 sm:px-10`}
        nextClassName={'flex justify-center'}
        nextLinkClassName={`${pageNumber === info?.pages ? 'bg-zinc-700 text-gray-500/90 cursor-default' : 'bg-rick_blue'}  
        text-2xl rounded-md py-2 w-full text-center px-3 sm:px-10`}
        activeClassName={'font-bold text-rick_lightGreen text-3xl'}
        marginPagesDisplayed={width < 576 ? 1 : 2}
        pageRangeDisplayed={width < 576 ? 1 : 2}
      />


    </>
  )
}

export default Pagination