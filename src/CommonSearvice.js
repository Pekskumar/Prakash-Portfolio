import CssIcon from "./Assets/Images/CssIcon";
import HtmlIcon from "./Assets/Images/HtmlIcon";
import NodeIcon from "./Assets/Images/NodeIcon";
import ReactBootstrapIcon from "./Assets/Images/ReactBootstrapIcon";
import ReactJsIcon from "./Assets/Images/ReactJsIcon";
import RenderIcon from "./Assets/Images/RenderIcon";
import RTKIcon from "./Assets/Images/RTKIcon";
import ChartIcn from './Assets/Images/Chart.js_logo.svg.png'
import GnewsIcn from './Assets/Images/Gnews.jpg'
import IPAPIIcn from './Assets/Images/ipapi.png'
import WetherIcn from './Assets/Images/openweathermap.png'
import DummyIcn from './Assets/Images/dummyjson.png'
import instachat from './Assets/Images/instachat.png'
import EMSImg from './Assets/ProjectImage/emsimg.png'
import CartImg from './Assets/ProjectImage/lifestore.png'
import ETImg from './Assets/ProjectImage/et.png'
import GmailImg from './Assets/ProjectImage/gmail.png'
import MCImg from './Assets/ProjectImage/mc.png'
import GSImg from './Assets/ProjectImage/goose.png'
import Ga4Img from './Assets/ProjectImage/ga4.png'
import TaskImg from './Assets/ProjectImage/task.png'
import NewsImg from './Assets/ProjectImage/news1.png'
import StripeIcn from './Assets/Images/stripe_logo_icon_167962.png'
import MongodbIcon from "./Assets/Images/MongodbIcon";

export const CommonService = { TechIcon, ProjectImage };
export function TechIcon(icon) {
    if (icon !== "" && icon !== null && icon !== undefined) {
        if (icon === 'react') {
            return <ReactJsIcon size='20' />
        } else if (icon === 'React Bootstrap') {
            return <ReactBootstrapIcon size='20' />
        } else if (icon === 'css') {
            return <CssIcon size='20' />
        } else if (icon === 'html') {
            return <HtmlIcon size='20' />
        } else if (icon === 'RTK') {
            return <RTKIcon size='20' />
        } else if (icon === 'node') {
            return <NodeIcon size='20' />
        } else if (icon === 'render server') {
            return <RenderIcon size='20' />
        } else if (icon === 'MongoDB') {
            return <MongodbIcon size='20' />
        } else if (icon === 'Chart.js') {
            return <img src={ChartIcn} style={{ height: '20px' }} />
        } else if (icon === 'gnews.io') {
            return <img src={GnewsIcn} style={{ height: '20px' }} />
        } else if (icon === 'ipapi.co') {
            return <img src={IPAPIIcn} style={{ height: '20px' }} />
        } else if (icon === 'openweathermap') {
            return <img src={WetherIcn} style={{ height: '20px' }} />
        } else if (icon === 'dummyjson API') {
            return <img src={DummyIcn} style={{ height: '20px' }} />
        } else if (icon === 'stripe') {
            return <img src={StripeIcn} style={{ height: '20px' }} />
        }
    }
}
export function ProjectImage(image) {
    if (image !== "" && image !== null && image !== undefined) {
        if (image === 'ems') {
            return EMSImg;
        } else if (image === 'cart') {
            return CartImg;
        }
        else if (image === 'et') {
            return ETImg;
        }
        else if (image === 'gc') {
            return GmailImg;
        }
        else if (image === 'mc') {
            return MCImg;
        }
        else if (image === 'gse') {
            return GSImg;
        }
        else if (image === 'ga-4') {
            return Ga4Img;
        }
        else if (image === 'taskboard') {
            return TaskImg;
        }
        else if (image === 'news') {
            return NewsImg;
        }
        else if (image === 'instachat') {
            return instachat;
        }
    }
}