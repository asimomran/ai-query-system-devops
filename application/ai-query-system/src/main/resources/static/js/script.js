.typing{

    display:flex;

    gap:6px;

    align-items:center;

}

.typing span{

    width:10px;

    height:10px;

    border-radius:50%;

    background:#60a5fa;

    animation:typing 1.2s infinite;

}

.typing span:nth-child(2){

    animation-delay:.2s;

}

.typing span:nth-child(3){

    animation-delay:.4s;

}

@keyframes typing{

    0%{

        opacity:.3;

        transform:translateY(0);

    }

    50%{

        opacity:1;

        transform:translateY(-6px);

    }

    100%{

        opacity:.3;

        transform:translateY(0);

    }

}