const CadastroCiclo = () => {
    const [visible, setVisible] = useState(false);
    const [ciclos, setCiclos] = useState([]);
    //const [ciclos, statusEnumerador(cicloaux)] = useState([]);
    const [ciclo, setCiclo] = useState([]);
    const [exercicio, setExercicio] = useState([]);
    const [quantidadeCiclo, setQuantidadeCiclo] = useState();
    const [edit, setEdit] = useState(false);
    const [show, setShow] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const toast = useRef(null);
    const [atualizaList, setAtualizaList] = useState(false);
    let { id } = useParams();
    const { search } = useLocation();
    const [, idenExercicio] = search.split("=");
    //console.log("Linha26 ciclos " + ciclos)
    console.log("Linha27 ciclo " + ciclo)
    const handleShowModalCiclo = (_node) => {
      setCiclo(_node);
      setVisible(true);
      setDisabled(true);
      setShow(true);
    };
    var cicloaux
    ciclos.forEach(ciclo => {
      console.log("Linha35: " + ciclo.statusCiclo)    
      cicloaux = ciclo.statusCiclo
    });
    console.log("Linha37: " + cicloaux)
    const statusEnumerador = (cicloaux) => {
      switch (true) {
        case cicloaux === "CONSOLIDACAO":        
          return "EM consolidação";                
        default:        
          return cicloaux;                
      }
    };
    console.log("Linha48: " + statusEnumerador(cicloaux))
  
    const handleEditModalCiclo = (_node) => {
      setCiclo(_node);
      setVisible(true);
      setEdit(true);
      setDisabled(false);
    };
    const handleCreateModalCiclo = (_node) => {
      setVisible(true);
      setEdit(false);
      setDisabled(false);
    };
    const actionTemplate = (node) => {
      let buttonEditar;
      let buttonVer;
      if (node.statusCiclo === "ABERTO" || node.statusCiclo === "PENDENTE") {
        buttonEditar = (
          <Button
            type="button"
            icon="pi pi-pencil"
            className="p-button-warning"
            style={{ marginRight: ".5em" }}
            tooltip="Editar Ciclo"
            onClick={() => {
              handleEditModalCiclo(node);
            }}
          ></Button>
        );
      }
      buttonVer = (
        <Button
          type="button"
          icon="pi pi-eye p-button-icon"
          className="p-button-help p-button p-component p-button-icon-only"
          style={{ marginRight: ".5em" }}
          tooltip="Visualizar Ciclo"
          onClick={() => {
            handleShowModalCiclo(node);
          }}
        ></Button>
      );
  
      return (
        <div>
          {buttonEditar}
          {buttonVer}
        </div>
      );
    };
  
    const header = (
      <div className="table-header">
        <Button
          type="button"
          onClick={() => {
            handleCreateModalCiclo();
          }}
        >
          <span className="pi pi-check p-button-icon p-button-icon-left"></span>
          <span className="p-button-label">Criar Ciclo</span>
        </Button>
      </div>
    );
  
    const footer = (
      <div className="table-footer">
        <p> </p>
        <Link to={`/exercicio`}>
          <Button type="button">
            <span className="pi pi-arrow-left p-button-icon p-button-icon-left"></span>
            <span className="p-button-label">Voltar </span>
          </Button>
        </Link>
      </div>
    );
  
    useEffect(() => {
      if (id !== null && id !== undefined && id !== "undefined" && idenExercicio === undefined) {
        findByIdCycle(id).then((res) => {
          setCiclos(res.data);
          setExercicio(res.data[0].exercicio);
          setQuantidadeCiclo(String(res.data.length + 1));
          console.log("Linha116: " + res.data[0].exercicio + " " + id + " " + idenExercicio)
          console.log("Linha117 " )
        });
  
        return;
      }
  
      if (idenExercicio !== undefined) {
        findByIdExercicio(idenExercicio).then((res) => {
          setExercicio(res.data.exercicio);
          setQuantidadeCiclo("1");
        });
        findByIdCycle(idenExercicio).then((res) => {
          setCiclos(res.data);
          setQuantidadeCiclo(String(res.data.length + 1));
        });
        return;
      }
      if (atualizaList === true) {
        findByIdCycle(idenExercicio).then((res) => {
          setCiclos(res.data);
          setExercicio(res.data[0].exercicio);
          setQuantidadeCiclo(String(res.data.length + 1));
        });
        setAtualizaList(false);
      }
    }, [id, atualizaList]);
  
    return (
      <div className="datatable">
        <Toast ref={toast} />
        <ConfirmDialog breakpoints={{ "960px": "75vw", "640px": "100vw" }} style={{ width: "50vw" }} />
        <CardSeplag title="MONITORAMENTO: CONSULTAR CICLOS DE MONITORAMENTO">
          <DataTable
            header={header}
            footer={footer}
            value={ciclos}          
            responsiveLayout="scroll"
            resizeable={+true}
            emptyMessage="Nenhum registro encontrado"
          >
            <Column field="exercicio.ano" header="Exercício"></Column>
            <Column field="descCiclo" header="Descrição"></Column>
            <Column field="dataInicio" header="Data Inicial2"></Column>
            <Column field="dataFim" header="Data Final"></Column>
            <Column field="statusCiclo" header="Status"></Column>
            <Column className="p-text-right" body={actionTemplate} field="action" header="Ação"></Column>
          </DataTable>
          console.log("Linha153: ")
          {visible && (
            <ModalMonitoraCiclo
              quantidadeCiclo={quantidadeCiclo}
              ciclo={ciclo}
              ciclos={ciclos}            
              exercicio={exercicio}
              edit={edit}
              setEdit={setEdit}
              visible={visible}
              setVisible={setVisible}
              disabled={disabled}
              setDisabled={setDisabled}
              show={show}
              setShow={setShow}
              setAtualizaList={setAtualizaList}
            />
          )}        
        </CardSeplag>      
      </div>    
    );  
  };