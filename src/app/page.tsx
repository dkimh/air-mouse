// import dynamic from 'next/dynamic';
import ThreeDViewer from './components/ThreeDViewer';
import SketchfabEmbed from "@/app/components/SketchfabEmbed";


// Avoid SSR issues with Three.js
// const ThreeDViewer = dynamic(() => import('../app/components/ThreeDViewer'), { ssr: false });

export default function Home() {
    return (
        <div>
            {/*<ThreeDViewer />*/}
            <SketchfabEmbed/>
        </div>
    );
}
