import React from 'react'

const SuscriptionBanner = () => {
    React.useEffect(() => {
        const js = `
        function ml_webform_success_3869348() {
        var $ = ml_jQuery || jQuery;
        $('.ml-subscribe-form-3869348 .row-success').show();
        $('.ml-subscribe-form-3869348 .row-form').hide();
      };
    `
        const script = document.createElement("script")
        const scriptText = document.createTextNode(js)
        script.appendChild(scriptText)
        document.body.appendChild(script)

        const script2 = document.createElement("script")
        script2.src = `https://groot.mailerlite.com/js/w/webforms.min.js?v300817f630ad0e957914d0b28a2b6d78`
        document.body.appendChild(script2)
    }, [])

    return (
        <div className='grid grid-cols-1 md:grid-cols-[160px_1fr_160px] md:gap-9'>
            <div className=' md:col-start-2 md:col-end-3 py-16 sm:py-24 lg:py-32'>

                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
                    <div className="max-w-xl font-bold lg:col-span-7">
                        <h2 className="inline text-3xl font-bold text-gray-900 tracking-tight sm:text-4xl sm:block lg:inline xl:block mb-3">Nuestros mejores bloques.</h2>{' '}
                        <p className="inline text-xl font-normal text-gray-700 sm:block lg:inline xl:block">No están a la venta. No están en esta web. Regístrate y te los mandamos gratis.</p>
                    </div>
                    <div
                        id="mlb2-3869348"
                        className="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-3869348 w-full max-w-md lg:col-span-5 lg:pt-2"
                    >
                        <div className="ml-form-align-center">
                            <div className="ml-form-embedWrapper embedForm">
                                <div className="ml-form-embedBody ml-form-embedBodyHorizontal row-form">

                                    <form className="ml-block-form" action="https://assets.mailerlite.com/jsonp/25720/forms/81925411081029188/subscribe" data-code="" method="post" target="_blank">

                                        <div className="ml-form-formContent horozintalForm">
                                            <div className="ml-form-horizontalRow flex gap-x-4">
                                                <div className="ml-input-horizontal grow">
                                                    <div className="horizontal-fields">
                                                        <div className="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                                                            <input
                                                                type="email"
                                                                className="form-control outline-none min-w-0 flex-auto rounded-md border-2 w-full border-orange-600 px-3.5 py-2 text-gray-900 shadow-sm sm:text-sm sm:leading-6"
                                                                data-inputmask=""
                                                                required
                                                                name="fields[email]"
                                                                placeholder="Entroduce tu email"
                                                                autoComplete="email"

                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="ml-button-horizontal primary">
                                                    <div>
                                                        <button
                                                            type="submit"
                                                            className='flex-none rounded-md border-2 border-orange-600 bg-orange-600 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-700 cursorHover cursor-none'
                                                        >
                                                            Enviar
                                                        </button>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <input type="hidden" name="ml-submit" value="1" />
                                    </form>
                                </div>
                                <div
                                    className="ml-form-successBody row-success"
                                    style={{ display: "none" }}
                                >
                                    <div
                                        className="ml-form-successContent whitespace-pre-line text-center flex-none rounded-md border border-orange-600 py-2.5 px-3.5 text-sm font-semibold text-orange-500 shadow-sm  cursor-none"
                                    >
                                        Formulario enviado. <br />
                                        Revisa tu email

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>





                </div>


            </div>

        </div>
    )
}

export default SuscriptionBanner
