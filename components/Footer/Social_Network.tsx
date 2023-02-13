import styled from 'styled-components';
import { Tooltip, Button } from "@nextui-org/react";
import { FluffyEdge } from '../../Types/globals-types';

interface Colors0 {
    color0: string;
}

export default function Social_Network({ data_social_media }:{ data_social_media: FluffyEdge}){

    return (
        <>
            <div>
                <div className="w-full relative">
                    <h1 className="text-xl border-b-2 dark:bg-gray-700 py-2 before:bg-[#d4010e] before:absolute before:w-[50px] before:h-[3px] before:bottom-0">Social Network</h1>
                </div>
                <div className="flex items-center space-x-5 mt-6">
                    <div className="flex">
                        {data_social_media.node.children.edges.map((item) => {
                            return <Tooltip key={item.node.id} content={item.node.title} color="invert">
                                <button>
                                    {/* @ts-ignore */}
                                    <BGCOLOR0 color0={item.node.template.custom_icon.backgroundColor}>
                                        <div className={`p-2 text-center w-12 h-[100%] `}>
                                             {/* @ts-ignore */}
                                            <a href={item.node.template.link.link} target="_blank" rel="noopener noreferrer">
                                                <i className={`${item?.node?.template?.custom_icon?.icon} headericon`}></i>
                                            </a>
                                        </div>
                                    </BGCOLOR0>
                                </button>
                                <h1></h1>
                            </Tooltip>
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}
const BGCOLOR0 = styled.div<Colors0>`
  &:hover{
    background: ${props => props.color0};
  }
  border: 2px solid #fff;
  margin-right: 4px;
  border-radius:5px;
  transition: all 0.3s ease-in-out;
`;
