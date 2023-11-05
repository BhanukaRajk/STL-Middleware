import { CaretRightOutlined } from '@ant-design/icons';
import { Collapse, theme } from 'antd';



const getItems = (panelStyle, data) => [
    {
        key: '1',
        label: data.category.service,
        children:
            data.options.map((item, index) => (
                <div key={index} className='flex flex-col px-5 py-3 mb-8 border rounded-md' >
                    <div><img src={`${item.logo}`} alt="Logo" className='w-10 h-10 rounded-xl'/></div>
                    <div className="font-bold text-lg my-5">{item.name}</div>
                    <div className="my-2">
                        <div className="font-semibold">Charges:</div>
                        <div className="mx-2">{item.daily}</div>
                        <div className="mx-2">{item.monthly}</div>
                    </div>
                    <div className="my-2">
                        <div className="font-semibold">To activate:</div>
                        <div className="mx-2">{item.dact}</div>
                        <div className="mx-2">{item.mact}</div>
                    </div>
                    <div className="my-2">
                        <div className="font-semibold">To deactivate:</div>
                        <div className="mx-2">{item.ddeact}</div>
                        <div className="mx-2">{item.mdeact}</div>
                    </div>
                    <div>
                        <button className='px-5 py-2 my-5 rounded-md bg-blue-800 text-white'>
                            Activate
                        </button>
                    </div>
                </div>
            )),
        style: panelStyle,
    },
];

const ServiceCategory = ({data}) => {

    if (data) {
        const { token } = theme.useToken();
        const panelStyle = {
            marginBottom: 24,
            background: token.colorFillAlter,
            borderRadius: token.borderRadiusLG,
            border: 'none',
        };

        return (
            <Collapse
                bordered={false}
                defaultActiveKey={['1']}
                expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                style={{
                    background: token.colorBgContainer,
                }}
                items={getItems(panelStyle, data)}
            />
        );
    } else {
        return (
            <>
                <div>Noting to show</div>
            </>
        )
    }
};

export default ServiceCategory;