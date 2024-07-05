import { useContext, useEffect, useState, useRef } from "react";
import { GlobalContext } from "../Provider";
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import * as d3 from 'd3';
import { Tree } from './Tree';

const VisualizationTree = () => {
    const navigate = useNavigate();
    const { user, setUser } = useContext(GlobalContext);
    const svgRef = useRef();

    useEffect(() => {
        const tree = new Tree();
        tree.initializeTree(tree.root, 5, 10000);

        function transformTreeData(node) {
            return {
                name: node.value,
                children: node.children.map(transformTreeData)
            };
        }

        const rootNode = transformTreeData(tree.root);
        const width = 960;
        const height = 500;

        const treeLayout = d3.tree().size([width, height]);
        const root = d3.hierarchy(rootNode);
        treeLayout(root);

        const svg = d3.select(svgRef.current)
            .attr('width', width)
            .attr('height', height);

        svg.selectAll('line')
            .data(root.links())
            .enter()
            .append('line')
            .attr('x1', d => d.source.x)
            .attr('y1', d => d.source.y)
            .attr('x2', d => d.target.x)
            .attr('y2', d => d.target.y)
            .style('stroke', 'black');

        svg.selectAll('circle')
            .data(root.descendants())
            .enter()
            .append('circle')
            .attr('cx', d => d.x)
            .attr('cy', d => d.y)
            .attr('r', 5)
            .style('fill', '#0284C7');
    }, []);

    return (
        <>
            <nav className="fixed flex flex-row top-5 mx-auto w-full z-20 items-center border-none border-black">
                <div className="relative flex flex-row sm:px-4 xs:px-4 xs:py-1.5 lg:min-w-[50%] md:min-w-[60%] sm:min-w-[60%] xs:min-w-[70%] text-[18px] justify-between items-center gap-x-4 mx-auto bg-white border border-slate-400 shadow-4xl rounded-xl">
                    <h1 className="bg-gradient-to-r text-transparent bg-clip-text from-[#4568dc] to-[#b06ab3] font-bold">Khan Sohel</h1>
                    <LogoutIcon sx={{ cursor: 'pointer', width: { xs: '22px' } }} onClick={() => { setUser(false); navigate("/"); toast.success("Logged Out"); }} />
                </div>
            </nav>
            <div className="relative flex mt-24 justify-center mx-auto w-fit">
                <h1 className="sm:text-[22px] xs:text-[20px] space-x-2">
                    <span className="bg-gradient-to-r text-transparent bg-clip-text from-[#028090] to-[#00BFB2] font-bold">Welcome to Deep</span>
                    <span className="">🌳</span></h1>
            </div>
            <div className="relative flex justify-center mx-auto mt-10 w-fit border border-gray-400">
                <svg ref={svgRef} ></svg>
            </div>
            {/* <div className="mt-[900px] border border-black"></div> */}
        </>
    )
}

export default VisualizationTree