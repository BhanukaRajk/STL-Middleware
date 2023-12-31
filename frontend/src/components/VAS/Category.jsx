import { CaretRightOutlined } from '@ant-design/icons';
import { Collapse, theme } from 'antd';
import PropTypes from 'prop-types';

const getItems = (panelStyle, data) => [
    {
        key: '1',
        label: "data.category.service",
        children:
            data.map((item, index) => (
                <div key={index} className='flex flex-col px-5 py-3 mb-8 border rounded-md text-center' >
                    <div><img src={"https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FSri_Lanka&psig=AOvVaw1njErR0NAByBaRdXo_S-vL&ust=1699292888395000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOjky761rYIDFQAAAAAdAAAAABAi"}
                        alt="Logo" className='w-10 h-10 rounded-xl' /></div>
                    <div className="font-bold text-lg my-5">{item.item.name}</div>
                    <div className="my-2 flex">
                        <div className="font-semibold">Charges:</div>
                        <div className="mx-2">{item.vas.price}</div>
                    </div>
                    <div className="my-2 flex">
                        <div className="font-semibold">More Info:</div>
                        <div className="mx-2">{item.vas.description}</div>
                    </div>
                    {/* <div className="my-2">
                        <div className="font-semibold">To deactivate:</div>
                        <div className="mx-2">{item.ddeact}</div>
                        <div className="mx-2">{item.mdeact}</div>
                    </div> */}
                    <div>
                        <form>
                            <button className='px-5 py-2 my-5 rounded-md bg-blue-800 text-white'>
                                Activate
                            </button>
                        </form>
                    </div>
                </div>
            )),
        style: panelStyle,
    },
];




const ServiceCategory = ({ data }) => {

    console.log(data);

    if (data?.length > 0) {
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
                <div className='w-full h-screen text-xl font-semibold text-center flex items-center justify-center'>No services available</div>
            </>
        )
    }
};

ServiceCategory.propTypes = {
    data: PropTypes.any.isRequired
}

export default ServiceCategory;