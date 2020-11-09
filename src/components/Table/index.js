import React from 'react';
import {
  TableContainer,
  Table,
  Title,
  Heading,
  Body,
  Row,
  PaginationContainer,
  Page,
  PrevPage,
  NextPage,
} from './tableElements';

function index({ column, data, totalPages, page, action, isLoading, title }) {  
  const pages = Math.ceil(totalPages/10);

  const handlePagination = (index) => {
    if (action) action(index+1)
  }

  const pagination = () => {
    const pagesRender = [];
    const maximumPage = 5;
    let startPage = page < maximumPage ? 1 : page-4;
    const endPage = startPage + 4 < totalPages ? startPage+4 : totalPages;
    const diff = startPage - endPage + 4;
    startPage -= startPage-diff > 0 ? diff:0;
    const disabledPrevious = page > 1 ? false:true;
    const disabledNext = page === pages ? true:false;

    pagesRender.push(
      <PrevPage id="btn-prev" disabled={disabledPrevious} onClick={()=>handlePagination(0)}> {`<<`} </PrevPage>
    );

    pagesRender.push(
      <PrevPage id="btn-prev" disabled={disabledPrevious} onClick={()=>handlePagination(page-2)}> {`<`} </PrevPage>
    );
    
    for (let index = startPage - 1; index < endPage; index++) {
      pagesRender.push(
        <Page id={`btn-page-${index}`} key={`btn-page-${index}`} active={page-1 === index? true:false } onClick={()=>handlePagination(index)}> {index + 1} </Page>
      );
    }

    pagesRender.push(
      <NextPage id="btn-next" disabled={disabledNext} onClick={()=>handlePagination(page)}> {`>`} </NextPage>
    );

    pagesRender.push(
      <NextPage id="btn-next" disabled={disabledNext} onClick={()=>handlePagination(pages-1)}> {`>>`} </NextPage>
    );
    
    return(
      <PaginationContainer>
        {pagesRender}
      </PaginationContainer>
    );
  }

  return (
    <TableContainer>
      <Title>{title}</Title>
      <Table>
        <thead>
        <Row>
          <Heading>No.</Heading>
          {
            column.map((item,index)=>{
              return(
                <Heading key={`heading-${index}`}>{item.heading}</Heading>
              );
            })
          }
        </Row>
        </thead>
        <tbody>
          {isLoading&&'Loading'}
          {
            data.length!==0 && !isLoading &&
            data.map((item,index)=>{
              return (
                <Row key={`row-${index}`}>
                  <Body>{(page-1)*10+(index+1)}.</Body>
                  {
                    column.map((data,i)=>{
                      return(
                        <Body key={`body-${i}`}>{item[data.value]}</Body>
                      );
                    })
                  }
                </Row>
              );
            })
          }
          {
            !isLoading && data.length===0 && 'Data tidak tersedia'
          }
          </tbody>
      </Table>
      {pagination()}
    </TableContainer>
  )
}

export default index
