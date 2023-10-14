import { Anchor } from 'antd';

const RoamingPackages = () => (
    <>
        <div
            style={{
                padding: '20px',
            }}
        >
            <Anchor
                direction="horizontal"
                items={[
                    {
                        key: 'prepaid',
                        href: '#prepaid',
                        title: 'Prepaid Packages',
                    },
                    {
                        key: 'postpaid',
                        href: '#postpaid',
                        title: 'Postpaid Packages',
                    },
                ]}
            />
        </div>
        <div>
            <div
                id="part-1"
                style={{
                    width: '100vw',
                    height: '100vh',
                    textAlign: 'center',
                    background: 'rgba(0,255,0,0.02)',
                }}
            />
            <div
                id="part-2"
                style={{
                    width: '100vw',
                    height: '100vh',
                    textAlign: 'center',
                    background: 'rgba(0,0,255,0.02)',
                }}
            />
        </div>
    </>
);
export default RoamingPackages;