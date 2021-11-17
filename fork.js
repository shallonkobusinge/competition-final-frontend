const { id } = useParams();

const dataToEdit = {
    id: vacantPost.id,
    tradeId: vacantPost.trade?.id,
    trade: vacantPost.trade?.name,
    qualification: vacantPost?.qualification,

};

React.useEffect(() => {

    getUser(id)
}, [])