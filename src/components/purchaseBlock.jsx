import React from "react";
import { ShoppingCart, BoxIcon, FileText, Calendar, Clipboard } from "lucide-react";

const PurchaseBlock = ({ process }) => {
    return (
        <div className="p-4 w-full border-2 border-gray-300 rounded-lg shadow-md bg-white my-2">
            <div className="flex items-center space-x-2 mb-4">
                <ShoppingCart className="text-gray-800" size={24} />
                <h1 className="font-bold text-gray-800 text-sm md:text-xl">
                    Processo de Compras Nº {process.number}
                </h1>
            </div>

            <div className="flex flex-wrap justify-between gap-4">
                <div className="space-y-3 flex flex-col">
                    <div className="flex items-center space-x-2">
                        <BoxIcon className="text-gray-800" size={20} />
                        <p className="text-sm text-gray-800">
                            <span className="font-bold">OBJETO:</span> {process.object}
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="flex items-center space-x-2">
                            <Calendar className="text-gray-800" size={20} />
                            <p className="text-sm text-gray-700">
                                <span className="font-bold">DATA DE ABERTURA:</span> {(process.start).toLocaleDateString('pt-br')}
                            </p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Calendar className="text-gray-800" size={20} />
                            <p className="text-sm text-gray-700">
                                <span className="font-bold">DATA DE ENCERRAMENTO:</span> {(process.end).toLocaleDateString('pt-br')}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col space-y-2">
                    <div className="flex items-center space-x-2">
                        <Clipboard className="text-gray-700" size={20} />
                        <p className="text-sm text-[#0B62AB] hover:text-[#4da3e9] visited:text-[#2a4963] underline cursor-pointer">Cotação</p>
                    </div>

                    <div className="flex items-center space-x-2">
                        <FileText className="text-gray-700" size={20} />
                        <p className="text-sm text-[#0B62AB] hover:text-[#4da3e9] visited:text-[#2a4963] underline cursor-pointer">Termo de Referência</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PurchaseBlock;
