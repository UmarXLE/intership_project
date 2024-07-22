import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from "./breadcrumbs.module.scss"

interface Props {
    links: {label: string, url?: string}[]
}

const BreadCrums = ({ links }: Props) => {
    const navigate = useNavigate();
    const handleNavigate = (url: string): void => {
        navigate(url)
    }
  return (
    <div className={styled.container}>
      {
        links?.map((item, i) => (
            <span key={i}>
                <p onClick={item?.url ? () => handleNavigate(item?.url as string) : () => {}}>{item?.label}</p>
                {
                    i < links?.length - 1 && <span>{"/"}</span>
                }
            </span>
        ))
      }
    </div>
  )
}

export default BreadCrums
