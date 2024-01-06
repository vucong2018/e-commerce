import React from "react"
import Header from "../shared/Header"

interface IDeafaultTemplateProps {
    children: React.ReactNode
}

export default function DefaultTemplate(props: IDeafaultTemplateProps) {
    return <div className="tw-w-full tw-bg-gray-400 tw-min-h-screen">
        <Header />
        <div className="tw-p-2">{props.children}</div>
    </div>
}