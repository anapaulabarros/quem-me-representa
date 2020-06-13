jQuery(function($){
    var SISTEMA = window.LOAD || {};
    var listCodigoParlamentares = [
    "4981","5982","945","5967","5529","751","6295","5990",
    "470","5973","739","475","5998","3830","5537","4994",
    "5976","3777","5718","5531","22","5953","5540","4525","345",
    "5894","5008","5385","4770","35","581","4545","4531",
    "5627","5895","5350","3361","90","1249","5533","5979",
    "5926","1186","5585","5557","5666","5376","742","285",
    "5422","5942","1023","6027","5985","5525","5924","5523",
    "825","374","5502","5012","5236","70","677","5905","5732",
    "5352","5322","2331","5527","5988","5959","4560","3396",
    "5535","5899","5748","1173","5411","5783","3806"];

    SISTEMA.getComissoes = function(CodigoParlamentar) {
        
        let contTitular = 0;
        let contSuplente = 0;
        let url = "http://legis.senado.leg.br/dadosabertos/senador/"+CodigoParlamentar+"/comissoes.json"
        $.get(url, function(data) {
            let items = data.MembroComissaoParlamentar.Parlamentar.MembroComissoes.Comissao;
            $.each(items , function(key, value) {
                if(value.DescricaoParticipacao == 'Titular'){
                    contTitular++;
                }else {
                    contSuplente++;
                }
            });
            $( "#comissao-titular-" + CodigoParlamentar ).text( 
                contTitular+ ' comissões'
            );
            $( "#comissao-suplente-" + CodigoParlamentar ).text( 
                contSuplente+ ' comissões'
            );
        });
       
    }

    $(document).ready(function(){

        listCodigoParlamentares.forEach(function(codigo) {

            SISTEMA.getComissoes(codigo);
            
        });
        
    });
});