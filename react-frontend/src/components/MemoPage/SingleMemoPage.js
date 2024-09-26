import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import client from "../../services/restClient";
import { Tag } from 'primereact/tag';
import moment from "moment";
import { InputText } from 'primereact/inputtext';
import ProjectLayout from "../Layouts/ProjectLayout";


const SingleMemoPage = (props) => {
    const navigate = useNavigate();
    const urlParams = useParams();
    const [_entity, set_entity] = useState();

    

    useEffect(() => {
        //on mount
        client
            .service("memo")
            .get(urlParams.singleMemoId, { query: { $populate: [            {
                path: "createdBy",
                service: "users",
                select: ["name"],
              },{
                path: "updatedBy",
                service: "users",
                select: ["name"],
              },] }})
            .then((res) => {
                set_entity(res || {});
                
            })
            .catch((error) => {
                console.log({ error });
                props.alert({ title: "Memo", type: "error", message: error.message || "Failed get memo" });
            });
    }, [props,urlParams.singleMemoId]);


    const goBack = () => {
        navigate("/memo");
    };

    return (
        <ProjectLayout>
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-10">
                <div className="flex align-items-center justify-content-start">
                    <Button className="p-button-text" icon="pi pi-chevron-left" onClick={() => goBack()} />
                    <h3 className="m-0">Memo</h3>
                </div>
                <p>memo/{urlParams.singleMemoId}</p>
                {/* ~cb-project-dashboard~ */}
            </div>
            <div className="card w-full">
                <div className="grid ">

            <div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">nama</label><p className="m-0 ml-3" >{_entity?.nama}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">jenis</label><p className="m-0 ml-3" >{_entity?.jenis}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">seksyen</label><p className="m-0 ml-3" >{_entity?.seksyen}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">app1</label><p className="m-0 ml-3" ><i id="app1" className={`pi ${_entity?.app1?"pi-check": "pi-times"}`}  ></i></p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">app2</label><p className="m-0 ml-3" ><i id="app2" className={`pi ${_entity?.app2?"pi-check": "pi-times"}`}  ></i></p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">app3</label><p className="m-0 ml-3" >{_entity?.app3}</p></div>
            

                    <div className="col-12">&nbsp;</div>
                </div>
            </div>
        </div>
        
        </ProjectLayout>
    );
};

const mapState = (state) => {
    const { user, isLoggedIn } = state.auth;
    return { user, isLoggedIn };
};

const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
});

export default connect(mapState, mapDispatch)(SingleMemoPage);
