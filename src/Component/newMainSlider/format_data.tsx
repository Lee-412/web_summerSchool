'use client'
import { Result } from 'antd';
import { Key, useEffect, useState } from 'react';

type TextProps = {
    url: any;
    children: any;
    type: string;
    text: string;
    bold?: boolean;
    italic?: boolean;
    underline?: boolean;
    strikethrough?: boolean;
    code?: boolean;
    link?: string;
};

type ContentProps = {
    type: string;
    children: TextProps[];
    level?: number;
    format?: string;
    image?: {
        url: string;
        alt: string;
    };
    url?: string;
};

type DataProps = {
    attributes: {
        title: string;
        category: string;
        content: ContentProps[];
        published: string;
        expiredDate: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        Author: string;
        media: {
            data: {
                id: number;
                attributes: {
                    name: string;
                    alternativeText: string;
                    caption: string;
                    width: number;
                    height: number;
                    formats: {
                        thumbnail: {
                            url: string;
                        };
                    };
                    url: string;
                };
            }[];
        };
    };
};

const DisplayContent = (props: any) => {

    console.log(props);

    const [data, setData] = useState<DataProps | null>(null);
    useEffect(() => {

        setData(props.props);

    }, [props]); // Chỉ chạy một lần sau khi component mount

    console.log(data);


    if (!data) {
        return <div>Loading...</div>;
    }

    const renderText = (textProps: TextProps) => {
        let textElement;
        if (textProps.type === "link") {
            console.log(textProps);

            textElement = <a target={`_blank`} href={`${textProps.url}`}>{textProps.children[0].text}</a>;
        }
        else {
            textElement = <span>{textProps.text}</span>;

            if (textProps.bold) {
                textElement = <strong>{textElement}</strong>;
            }
            if (textProps.italic) {
                textElement = <em>{textElement}</em>;
            }
            if (textProps.underline) {
                textElement = <u>{textElement}</u>;
            }
            if (textProps.strikethrough) {
                textElement = <del>{textElement}</del>;
            }
            if (textProps.code) {
                textElement = <code>{textElement}</code>;
            }

        }


        return textElement;
    };

    const renderContent = (content: ContentProps) => {
        switch (content.type) {
            case 'paragraph':
                return (
                    <p>
                        {content.children.map((child, index) => {
                            console.log(child.type);

                            return (
                                <span key={index}>{renderText(child)}</span>
                            )
                        })}
                    </p>
                );
            case 'heading':
                if (content.level === 1) {
                    return (
                        <h1>
                            {content.children.map((child, index) => (
                                <span key={index}>{renderText(child)}</span>
                            ))}
                        </h1>
                    );
                } else if (content.level === 2) {
                    return (
                        <h2>
                            {content.children.map((child, index) => (
                                <span key={index}>{renderText(child)}</span>
                            ))}
                        </h2>
                    );
                }
                break;
            case 'list':
                if (content.format === 'unordered') {
                    return (
                        <ul>
                            {content.children.map((child: any, index: any) => (
                                <li key={index}>
                                    {child.children.map((textChild: TextProps, textIndex: Key | null | undefined) => (
                                        <span key={textIndex}>{renderText(textChild)}</span>
                                    ))}
                                </li>
                            ))}
                        </ul>
                    );
                } else if (content.format === 'ordered') {
                    return (
                        <ol>
                            {content.children.map((child: any, index: any) => (
                                <li key={index}>
                                    {child.children.map((textChild: any, textIndex: any) => (
                                        <span key={textIndex}>{renderText(textChild)}</span>
                                    ))}
                                </li>
                            ))}
                        </ol>
                    );
                }
                break;
            case 'quote':
                return (
                    <blockquote>
                        {content.children.map((child, index) => (
                            <span key={index}>{renderText(child)}</span>
                        ))}
                    </blockquote>
                );
            case 'image':
                return (
                    <img
                        src={content.image?.url || ''}
                        alt={content.image?.alt || 'image'}
                    // width={content.image?.width}
                    // height={content.image?.height}
                    />
                );
            case 'link':
                return (
                    <a href={content.url}>
                        {content.children.map((child, index) => (
                            <span key={index}>{renderText(child)}</span>
                        ))}
                    </a>
                );
            default:
                return null;
        }
    };

    return (
        <div>
            {/* <h1>{data.attributes?.title}</h1> */}
            <div>
                {data.attributes?.content.map((content, index) => {
                    console.log(content);
                    console.log(content.children);

                    // if (content.children[0] === ") {
                    //     console.log(content);

                    // }
                    return (
                        <div>
                            <div key={index}>{renderContent(content)}</div>
                        </div>)
                })}
            </div>
        </div>
    );



};

export default DisplayContent;
