# Criar um Diagrama de Arquitetura usando Mermaid

```mermaid

graph TD
    subgraph Interface["Navegador"]
        UI
    end

    subgraph Front["React"]
        FrontEnd
    end

    subgraph Back["Next"]
        Backend
    end

    subgraph Banco["MongoDB"]
        BD
    end

    %%fluxo
    UI-->FrontEnd
    FrontEnd-->BackEnd
    BackEnd-->BD
    BD-->BackEnd
    BackEnd-->FrontEnd
    FrontEnd-->UI

```

# Outro Jeito

```mermaid

graph TD
    subgraph Interface["Navegador"]
        UI
    end

    subgraph Front/Back["React/Next"]
        FrontEnd
        BackEnd
    end

    subgraph Banco["MongoDB"]
        BD
    end

    %%fluxo
    UI-->FrontEnd
    FrontEnd-->BackEnd
    BackEnd-->BD
    BD-->BackEnd
    BackEnd-->FrontEnd
    FrontEnd-->UI

```