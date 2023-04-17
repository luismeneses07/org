import "./MiOrg.css"

const MiOrg = ({handleChange}) => {

    return (
        <section className="orgSection">
            <h3 className="title">Mi Organizacion</h3>
            <img src="/img/add.png" alt="Add" onClick={handleChange}/>
        </section>
    );
};

export default MiOrg;