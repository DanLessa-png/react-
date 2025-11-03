import './style.css';

export function FaleConosco(){
    return(
        <section className='contato'>
            <h1>Fale Conosco</h1>
            <hr />
            <p>
                Entre em contato conosco para obter mais informações sobre nossos serviços de contabilidade. Nossa equipe está pronta para ajudar você a simplificar a gestão financeira do seu negócio.
            </p>
            <form className='form' onSubmit={handleSubmit}/>
            <div className='grid- cols-3'>
                <label className='field'>
                    <span>Nome</span>
                    <input type="text" />
                </label>
            </div>
            <ul>
                <li>Email: SENAI@gmail.com</li>
                <li>Telefone: (71) 92938-3213</li>
                <li>Endereço: Rua A, 123 - Centro - Salvador - Bahia</li>
            </ul>
        </section>
    )
}