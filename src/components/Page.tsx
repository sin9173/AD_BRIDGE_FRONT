import { pageParam } from "../pages/admin/AdminMatchingList";
import { PageContainer } from "../styles/PageStyles";


export interface PageProps {
    props? : pageParam
}

const movePage = (page : number) => {
    const search = new URLSearchParams(window.location.search);
    search.set('page', String(page));

    window.location.href = `${window.location.pathname}?${search.toString()}`;
}

const Page:React.FC<PageProps> = (data) => {



    return <PageContainer>

        {data?.props?.page!==0
        ?<button onClick={() => movePage(Number(data?.props?.page) - 1)}>{'>'}</button>:''}
        
        {!(data?.props?.last)?
       <button onClick={() => movePage(Number(data?.props?.page) + 1)}>{'>'}</button>
        :''}
    </PageContainer>

}

export default Page;