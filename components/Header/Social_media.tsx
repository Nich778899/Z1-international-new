import styled from 'styled-components';
import { FluffyEdge } from '../../Types/globals-types';

interface Colors0 {
  color0: string;
}

export default function Social_media({data_Social_media}:{ data_Social_media: FluffyEdge}) {
  return (
    <div className="flex bg-[#212529] items-center space-x-5">
      <div className="flex">
        {data_Social_media.node.children.edges.map((item: any) => {
            return <BGCOLOR0 key={item.node.id} color0={item.node.template.custom_icon.backgroundColor
            }>
              <div className={`p-2 text-center w-12 h-[100%] px-2 border-l border-l-gray-400`} >
                <a href={item.node.template.link.link } target="_blank" rel="noopener noreferrer">
                  <i className={`${item?.node?.template?.custom_icon?.icon} headericon`}></i>
                </a>
              </div>
            </BGCOLOR0>
          })
        }
      </div>
    </div>
  );
}
const BGCOLOR0 = styled.div<Colors0>`
  &:hover{
    background: ${props => props.color0};
  }
`;


