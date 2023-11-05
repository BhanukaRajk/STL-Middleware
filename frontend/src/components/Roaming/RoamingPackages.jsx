import { Tabs } from 'antd';
import NewPackage from './NewPackage';
import ExistingPackages from './ExistingPackages';

const tabs = [
    {
        key: '1',
        label: 'Your Roaming Packages',
        children: <ExistingPackages />
    },
    {
        key: '2',
        label: 'Activate New',
        children: <NewPackage />
    },
];

const RoamingPackages = () => (
    <Tabs
        defaultActiveKey="1"
        centered
        items={tabs}
    />
);
export default RoamingPackages;