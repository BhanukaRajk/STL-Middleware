

export const getDataPacks = async (req, res) => {
    const { customer_id } = req.params;
    res.render('dashboard', { data });
};