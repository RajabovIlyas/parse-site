import React, {FC, useEffect, useState} from "react";
import {Product} from "../types/product";
import apiFetch from "../utils/apiFetch";
import Card from "../components/Card/Card";
import {Pagination} from "antd";
import {CardGrid, StyleHome, StylePagination} from "./style";

const Home: FC = () => {
    const [pageSelect,setPageSelect] = useState(1);
    const [product, setProduct] = useState<Product[]>([]);
    const [page, setPage] = useState(1);
    useEffect(() => {
        apiFetch('/parse', {method: 'get', params: {page: pageSelect}})
            .then(result => {
                setProduct(result.data);
                setPage(Number.parseInt(result.total));
            })
    },[pageSelect])

    const onChange = (page: number) => {
        setPageSelect(page);
    }

    return (
        <StyleHome>
            <StylePagination>
                <Pagination onChange={onChange} defaultCurrent={pageSelect} total={page*10} showSizeChanger={false}/>
            </StylePagination>
            <CardGrid>
                {product.map((value, index) => <Card key={index} {...value}/>)}
            </CardGrid>
        </StyleHome>
    )
}

export default Home;
