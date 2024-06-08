'use client'
import { useEffect, useState } from 'react';
import ModalLearnMore from '../newMainSlider/modal_learn_more';
import './news.css'
import { Button, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import GridViewIcon from '@mui/icons-material/GridView';
import ViewListIcon from '@mui/icons-material/ViewList';


export default function NewsListItem(props: any) {
    const [searchTerm, setSearchTerm] = useState('');


    const [isColumn, setIsColumn] = useState(false)
    function removeDiacritics(str: string): string {
        const diacriticsMap: Record<string, string> = {
            'á': 'a', 'à': 'a', 'ả': 'a', 'ã': 'a', 'ạ': 'a',
            'â': 'a', 'ấ': 'a', 'ầ': 'a', 'ẩ': 'a', 'ẫ': 'a', 'ậ': 'a',
            'ă': 'a', 'ắ': 'a', 'ằ': 'a', 'ẳ': 'a', 'ẵ': 'a', 'ặ': 'a',
            'đ': 'd',
            'é': 'e', 'è': 'e', 'ẻ': 'e', 'ẽ': 'e', 'ẹ': 'e',
            'ê': 'e', 'ế': 'e', 'ề': 'e', 'ể': 'e', 'ễ': 'e', 'ệ': 'e',
            'í': 'i', 'ì': 'i', 'ỉ': 'i', 'ĩ': 'i', 'ị': 'i',
            'ó': 'o', 'ò': 'o', 'ỏ': 'o', 'õ': 'o', 'ọ': 'o',
            'ô': 'o', 'ố': 'o', 'ồ': 'o', 'ổ': 'o', 'ỗ': 'o', 'ộ': 'o',
            'ơ': 'o', 'ớ': 'o', 'ờ': 'o', 'ở': 'o', 'ỡ': 'o', 'ợ': 'o',
            'ú': 'u', 'ù': 'u', 'ủ': 'u', 'ũ': 'u', 'ụ': 'u',
            'ư': 'u', 'ứ': 'u', 'ừ': 'u', 'ử': 'u', 'ữ': 'u', 'ự': 'u',
            'ý': 'y', 'ỳ': 'y', 'ỷ': 'y', 'ỹ': 'y', 'ỵ': 'y',
        };

        const normalizedStr = str.replace(/\s+/g, ' ');

        return normalizedStr.replace(/[^\u0000-\u007E]/g, (a: string) => diacriticsMap[a] || a);
    }

    const filteredArticles = props.sliderData.filter((article: any) =>
        removeDiacritics(article.title).toLowerCase().includes(removeDiacritics(searchTerm).toLowerCase())
    );


    console.log(props);
    const [modalLearnMore, setModalLearnMore] = useState(false);
    const [selectedArticle, setSelectedArticle] = useState({
        id: '',
        title: '',
        content: '',
        author: '',
        data: '',
        img: '',
    });

    const handleClick = (e: any, article: any) => {
        e.preventDefault();
        setSelectedArticle(article);
        setModalLearnMore(true);
    };
    const [isGridView, setIsGridView] = useState(false); // Mặc định là chế độ xem lưới

    const handleViewSwitch = () => {
        setIsGridView(prevState => !prevState);
        setIsColumn(!isColumn)

    };

    return (
        <div className="container list-article">
            <div className='action-base'>

                <div className="searchBase">
                    <IconButton type="button" style={{ padding: '10px', color: '#208ecc' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                    <input
                        type="text"
                        placeholder="Search for ..."
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                        style={{ flex: 1, padding: '10px', border: 'none', outline: 'none', backgroundColor: 'transparent', color: '#63b0db' }}
                    />
                </div>

                <div className="switch-view">
                    <Button onClick={handleViewSwitch}>
                        {isGridView ? <GridViewIcon /> : <ViewListIcon />}
                    </Button>
                </div>
            </div>

            <div className={`${isColumn ? 'col' : 'row-content'}`}>

                {filteredArticles.map((article: any) => (
                    <div key={article.id} className={`${isColumn ? 'article-wrapper' : 'bloc'}`}>

                        <article>
                            <a onClick={(e) => handleClick(e, article)} className="more">more</a>

                            <div className="img-wrapper">

                                <img src={`${process.env.NEXT_PUBLIC_STRAPI_LINK_URL}${article.img}`} alt={article.title} />
                            </div>

                            <h1 >{article.title}</h1>

                            <p className={`${isColumn ? 'col-p' : 'row-p'}`}>

                                {(() => {
                                    const maxLength = `${isColumn ? 50 : 50}`

                                    const content = article.content;
                                    const firstPeriodIndex = content.indexOf('.');
                                    if (firstPeriodIndex !== -1 && firstPeriodIndex <= maxLength) {
                                        return content.substring(0, firstPeriodIndex + 1) + '...';
                                    } else {
                                        return content.substring(0, maxLength) + '...';
                                    }
                                })()}

                                {modalLearnMore && (
                                    <ModalLearnMore
                                        img={selectedArticle.img}
                                        author={selectedArticle.author}
                                        title={selectedArticle.title}
                                        content={selectedArticle.content}
                                        data={selectedArticle.data}
                                        openModal={modalLearnMore}
                                        setOpenModal={setModalLearnMore}
                                    />
                                )}
                            </p>

                        </article>
                    </div>
                ))}
            </div>




        </div >
    );
};

