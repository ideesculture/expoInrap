<?php
//var_dump($va_home_content);die();
ini_set("display_errors", true);
error_reporting(E_ERROR);

$numberOfRow = $this->getVar("numberOfRow");
$rows = $this->getVar("content");

?>
<script src="https://cdn.jsdelivr.net/npm/tinymce@6.1.0/tinymce.min.js"></script>



<form id="illustration" method="post" action="<?php print caNavUrl($this->request, '*', '*', 'Save2') ?>" style="width: 600px;position:fixed;border-bottom:1px solid #eeeeee;top:60px;z-index:20;background:white;padding:10px 0 20px;display:none;">
    <p>Upload d'illustration pour la home</p>
    <iframe style="margin:0;padding:0;height:60px;width:700px;border:none;overflow: hidden;" src="https://musee.sacem.fr/upload/manual.php?return=url"></iframe>
    <input type="hidden" name="zone" value="" />
    URL illustration <input type="text" name="image" value="" style="width:400px" /><br />
    <button type="submit">Enregistrer</button><button onClick="$('form').show();$('#illustration').hide();return false;">Contenu</button>
</form>
<form method="post" action="<?php print caNavUrl($this->request, '*', '*', 'Save2') ?>" style="width: 600px;position:fixed;border-bottom:1px solid #eeeeee;top:60px;z-index:20;background:white;padding:10px 0 20px;display:none;" id="form-home-zone">
    <input type="hidden" name="zone" value="" /><br />
    <input type="hidden" name="row" value="" /><br />

    <label>Type</label>
    <select name="type" id="selecttype">
        <option value="1">Exposition Jeunesse</option>
        <option value="2">Exposition Partenaire</option>
        <option value="3">Exposition Adulte</option>
        <option value="4">Texte</option>
        <option value="5">Bloc de statistique</option>
    </select><br />
    <div id="search-exhibition-jeunesse" class="search" style="">
        <input id="exhibition_jeunesse_id_lookup" class="exhibition_jeunesse_id_-input lookupBg ui-autocomplete-input" type="text" placeholder="Sélectionner une exposition jeunesse" style="width:100%;" />
        <div id="exhibition_jeunesse_preview" class="preview" style="display:none;"></div>
    </div>
    <div id="search-exhibition-partenaire" class="search" style="display:none;">
        <input id="exhibition_partenaire_id_lookup" class="exhibition_partenaire_id_-input lookupBg ui-autocomplete-input" type="text" placeholder="Sélectionner une exposition partenaire" style="width:100%;" />
        <div id="exhibition_partenaire_preview" class="preview" style="display:none;"></div>
    </div>
    <div id="search-exhibition-adulte" class="search" style="display:none;">
        <input id="exhibition_adulte_id_lookup" class="exhibition_adulte_id-input lookupBg ui-autocomplete-input" type="text" placeholder="Sélectionner une exposition adulte" style="width:100%;" />
        <div id="exhibition_adulte_preview" class="preview" style="display:none;"></div>
    </div>
    <div id="texte" class="search" style="display:none;">
        <div id="textInput">Insérer du texte</div>
    </div>
    <div id="statistique" class="search" style="display:none;">
        <div id="">Ajout d'un bloc de statistique après enregistrement.</div>
    </div>
    
    <input name="id" id="content_id" type="hidden" value="" />
    <div id="title" style="width:100%;padding:6px 0;font-size:14px;"></div>
    <br />
    <button type="submit">Enregistrer</button>
    <button onClick="$('form').hide();$('#illustration').show();return false;">Illustration</button>
</form>

<table id="homeTable">
    <?php

    foreach ($rows as $rowId => $row) {
        print "<tr data-row='" . $rowId . "'>";
        foreach ($row as $cellId => $cell) {
            print "<td class='zone' data-cell='" . $cellId . "' ";
            if ($cell["type"] == "hidden") {
                print "style='display:none' ";
            }

            if ($cell["allMergedCell"]){
                print "data-allmergedcell='".$cell["allMergedCell"]."' ";
            }
            
            if ($cell["rowspan"]) {
                print "rowspan='" . $cell["rowspan"] . "' ";
            }
            if ($cell["colspan"]) {
                print "colspan='" . $cell["colspan"] . "' ";
            }
            print ">";
            print print_content($cellId, $va_home_content);
            print "</td>";
        }



        print "</tr>";
    }

    ?>

    <?php if (empty($rows)) : ?>
        <tr data-row="1">
            <td class="zone" data-cell="1">

            </td>
            <td class="zone" data-cell="2">

            </td>
            <td class="zone" data-cell="3">

            </td>
        </tr><?php endif; ?>


</table>
<div class="buttons"><i class="fa fa-plus-circle" onclick="addRow()" aria-hidden="true"></i><i class="fa fa-minus-circle" id="deleteRow" aria-hidden="true"></i><i class="fa fa-link" id="merge" aria-hidden="true"></i><i class="fa fa-chain-broken" id="unmerged" aria-hidden="true"></i><i class="fa fa-floppy-o" onclick="save()" aria-hidden="true"></i>
</div>

<form id="formJson" action="<?= __CA_URL_ROOT__ ?>/index.php/expoInrap/Home/SaveBlock" method="POST">
    <input type="hidden" id="jsonTable" name="jsonTable" val="">
</form>



<!-- ExhibitionEditor editor CSS -->
<script>
    $(document).ready(function() {
        $("#leftNav").remove();
        tinymce.init({
            selector: '#textInput',
            menubar: false,
            inline: true,
            plugins: [
                'autolink', 'codesample', 'link', 'lists',
                'media',
                'quickbars', 'codesample', 'help'
            ],
            toolbar: false,
            quickbars_insert_toolbar: 'quicktable image media codesample',
            quickbars_selection_toolbar: 'bold italic underline | blocks | blockquote quicklink forecolor',
            contextmenu: 'undo redo | inserttable | cell row column deletetable | help',
            color_cols: 10,
            powerpaste_word_import: 'clean',
            powerpaste_html_import: 'clean',

        });
    });

    $("select[name='type']").on("change", function() {
        if ($(this).val() == 1) {
            $(".search").hide();
            $("#search-exhibition-jeunesse").show();
        }
        if ($(this).val() == 2) {
            $(".search").hide();
            $("#search-exhibition-partenaire").show();
        }
        if ($(this).val() == 3) {
            $(".search").hide();
            $("#search-exhibition-adulte").show();
        }
        if ($(this).val() == 4) {
            $(".search").hide();
            $("#texte").show();
        }
        if ($(this).val() == 4) {
            $(".search").hide();
            $("#texte").show();
        }
        if ($(this).val() == 5) {
            $(".search").hide();
            $("#statistique").show();
        }
        

    });

    jQuery('.zone').on("click", function() {
        if (!window._edition) {
            jQuery('.zone').removeClass("selected");
            $(this).addClass("selected");
            $("#form-home-zone").show();
            $("input[name='zone']").val($(this).attr("data-cell"));

            var numzone = $(this).attr("data-cell") - 1;

        }

        //$("#mainContent > div > form").show();
        //$("select[name='type']").val(content[numzone].type);
        //$("input[name='title']").val(content[numzone].title);
        //$("input[name='id']").val(content[numzone].content_id);



    });

    function addRow() {
        var rowCount = $('#homeTable tr').length;
        $("#homeTable").append("<tr data-row='" + (parseInt(rowCount) + 1) + "'><td class='zone' data-cell='" + ((rowCount * 3) + 1) + "'></td><td class='zone' data-cell='" + ((rowCount * 3) + 2) + "'></td><td class='zone' data-cell='" + ((rowCount * 3) + 3) + "'></td></tr>");
    }

    function save() {
        var table = {};
        table["numberOfRow"] = $('#homeTable tr').length;
        var rows = {};
        var row = {};
        $('#homeTable tr').each(function() {
            row = {};
            rowId = $(this).data("row");
            $(this).find("td").each(function() {
                cell = {};
                cellId = $(this).data("cell");
                if ($(this).attr("colspan")) {
                    cell["colspan"] = $(this).attr("colspan");
                }
                if ($(this).attr("rowspan")) {
                    cell["rowspan"] = $(this).attr("rowspan");
                }
                if ($(this).css("display") == "none") {
                    cell["type"] = "hidden";
                }
                if ($(this).attr("data-allmergedcell")){
                    cell["allMergedCell"] = $(this).attr("data-allmergedcell");
                }
                row[cellId] = cell;
            })
            rows[rowId] = row;
        })
        table["rows"] = rows;
        var table = JSON.stringify(table);

        $("#jsonTable").val(table);
        $("#formJson").submit();

    }

    $("#merge").on('click', function() {
        window._edition = !window._edition;
        if (window._edition) {
            alert("Cliquer sur deux cellules pour les fusionner");
            var $tds = $('td');
            var count = 2;
            var fusion = "";
            $tds.on('click', function(e) {
                if (count == 2) {
                    fusion = $(this);
                } else if (count == 1) {
                    if ($(this).data("cell") < fusion.data("cell")) {
                        if ($(this).data("cell") + 1 == fusion.data("cell") || ($(this).data("cell") + parseInt($(this).attr("colspan"))) == fusion.data("cell")) {
                            //SI CEST JUSTE  A COTE
                            if (!$(this).attr("colspan")) {
                                $(this).attr("colspan", 1);
                            }
                            $(this).attr("colspan", parseInt($(this).attr("colspan")) + 1);
                            if (!$(this).data("allmergedcell")) {
                                $(this).attr("data-allmergedcell", fusion.data("cell"));
                            } else {
                                $(this).attr("data-allmergedcell", $(this).data("allmergedcell") + "-" + fusion.data("cell"));
                            }
                            fusion.hide();

                        }
                        if ($(this).data("cell") + 3 == fusion.data("cell") || ($(this).data("cell") + parseInt($(this).attr("rowspan")) * 3) == fusion.data("cell")) {
                            //SI CEST JUSTE EN DESSOUS
                            if (!$(this).attr("rowspan")) {

                                $(this).attr("rowspan", 1);
                            }
                            $(this).attr("rowspan", parseInt($(this).attr("rowspan")) + 1);
                            if (!$(this).data("allmergedcell")) {
                                $(this).attr("data-allmergedcell", fusion.data("cell"));
                            } else {
                                $(this).attr("data-allmergedcell", $(this).data("allmergedcell") + "-" + fusion.data("cell"));
                            }
                            fusion.hide();


                        }
                    } else {
                        if ($(this).data("cell") == fusion.data("cell") + 1 || (fusion.data("cell") + parseInt(fusion.attr("colspan"))) == $(this).data("cell")) {
                            //SI CEST JUSTE  A COTE
                            if (!fusion.attr("colspan")) {
                                fusion.attr("colspan", 1);
                            }
                            fusion.attr("colspan", parseInt(fusion.attr("colspan")) + 1);
                            if (!fusion.data("allmergedcell")) {
                                fusion.attr("data-allmergedcell", $(this).data("cell"));
                            } else {
                                fusion.attr("data-allmergedcell", fusion.data("allmergedcell") + "-" + $(this).data("cell"));
                            }
                            $(this).hide();


                        }
                        if ($(this).data("cell") == fusion.data("cell") + 3 || (fusion.data("cell") + parseInt(fusion.attr("rowspan")) * 3) == $(this).data("cell")) {
                            //SI CEST JUSTE EN DESSOUS
                            if (!fusion.attr("rowspan")) {
                                fusion.attr("rowspan", 1);
                            }
                            fusion.attr("rowspan", parseInt(fusion.attr("rowspan")) + 1);
                            if (!fusion.data("allmergedcell")) {
                                fusion.attr("data-allmergedcell", $(this).data("cell"));
                            } else {
                                fusion.attr("data-allmergedcell", fusion.data("allmergedcell") + "-" + $(this).data("cell"));
                            }
                            $(this).hide();
                        }
                    }
                }
                count--;
            })
        } else {
            alert("Fin du mode fusion");
        }



    })
    $("#unmerged").on('click', function() {
        window._edition = !window._edition;
        if (window._edition) {
            var $tds = $('td');
            var count = 1;
            $tds.on('click', function(e) {
                if (count == 1) {
                    var cell = $(this);
                    if (cell.attr("rowspan")) {
                        cell.removeAttr("rowspan");
                    }
                    if (cell.attr("colspan")) {
                        cell.removeAttr("colspan");
                    }

                    var allmergedcell = cell.attr("data-allmergedcell").toString();

                    allmergedcell = allmergedcell.split("-");
                    allmergedcell.forEach(function(cellId) {

                        var $tds = $('td');
                        $tds.each(function() {
                            // console.log(cellId, $(this).data("cell"));

                            if ($(this).data("cell") == cellId) {
                                $(this).css("display", "table-cell");
                            }
                        })

                    })
                }
                count--;
            })

        }
    })
    $("#deleteRow").on('click', function() {
        var $trs = $('tr');
        var count = 1;
        $trs.on('click', function(e) {
            if (count == 1) {
                var tr = $(this);
                tr.children().each(function() {
                    var cell = $(this);
                    if (cell.attr("rowspan")) {
                        cell.removeAttr("rowspan");
                    }
                    if (cell.attr("colspan")) {
                        cell.removeAttr("colspan");
                    }
                    var allmergedcell = cell.attr("data-allmergedcell");
                    if (allmergedcell) {
                        allmergedcell = allmergedcell.toString();
                        allmergedcell = allmergedcell.split("-");
                        allmergedcell.forEach(function(cellId) {

                            var $tds = $('td');
                            $tds.each(function() {
                                // console.log(cellId, $(this).data("cell"));

                                if ($(this).data("cell") == cellId) {
                                    $(this).css("display", "table-cell");
                                }
                            })
                        })
                    }
                })

                tr.remove();

            }
            count--;
        })
    })

    $(document).ready(function() {
        $("#leftNav").remove();
        $('#representation_id_lookup').keyup(function() {
            var searchField = $('#representation_id_lookup').val();
            console.log(searchField);
            $.get('<?php print __CA_URL_ROOT__; ?>/index.php/exhibitionCMS/Home/searchObjectJson/search/' + searchField, function(data) {
                $('#representation_preview').html(data);
                if ($('#representation_preview').html() == "") {
                    $('#representation_preview').hide();
                } else {
                    $('#representation_preview').show();
                }
                console.log(data);
            });
        });

        $('body').on("click", ".preview div", function() {
            console.log($(this));
            console.log($(this).data());
            $('.lookup').val("");
            $('.preview').hide();
            $("#content_id").val($(this).data('id'));
            $("#title").html($(this).data('label'));
        });

        $('#exhibition_jeunesse_id_lookup').keyup(function() {
            var searchField = $('#exhibition_jeunesse_id_lookup').val();
            console.log(searchField);
            $.get('<?php print __CA_URL_ROOT__; ?>/index.php/expoInrap/Home/searchExhibitionJeunesseJson/search/' + searchField, function(data) {
                $('#exhibition_jeunesse_preview').html(data);
                if ($('#exhibition_jeunesse_preview').html() == "") {
                    $('#exhibition_jeunesse_preview').hide();
                } else {
                    $('#exhibition_jeunesse_preview').show();
                }
                console.log(data);
            });
        });

        $('#exhibition_partenaire_id_lookup').keyup(function() {
            var searchField = $('#exhibition_partenaire_id_lookup').val();
            console.log(searchField);
            $.get('<?php print __CA_URL_ROOT__; ?>/index.php/expoInrap/Home/searchExhibitionPartenaireJson/search/' + searchField, function(data) {
                $('#exhibition_partenaire_preview').html(data);
                if ($('#exhibition_partenaire_preview').html() == "") {
                    $('#exhibition_partenaire_preview').hide();
                } else {
                    $('#exhibition_partenaire_preview').show();
                }
                console.log(data);
            });
        });

        $('#exhibition_adulte_id_lookup').keyup(function() {
            var searchField = $('#exhibition_adulte_id_lookup').val();
            console.log(searchField);
            $.get('<?php print __CA_URL_ROOT__; ?>/index.php/expoInrap/Home/searchExhibitionAdulteJson/search/' + searchField, function(data) {
                $('#exhibition_adulte_preview').html(data);
                if ($('#exhibition_adulte_preview').html() == "") {
                    $('#exhibition_adulte_preview').hide();
                } else {
                    $('#exhibition_adulte_preview').show();
                }
                console.log(data);
            });
        });

       
    });
</script>

<style>
    #homeTable {
        width: 900px;
        margin-left: 20px;
    }

    #homeTable td {
        height: 150px;
        width: 300px;
        padding: 0;
        border: 1px solid lightgray;

    }

    .buttons {
        width: 15px;
        text-align: center;
        font-size: 20px;
        position: fixed;
        top: 50vh;
        left: 1172px;
        display: flex;
        flex-direction: column;
    }

    .buttons i {
        margin-left: 10px;
    }

    #mainContent {
        width: 955px;
        margin-left: 0;
        position: relative;
        border-left: 2px solid #ddd;
    }

    #textInput{
        border: 1px solid lightgray;
    padding: 5px;
    border-radius: 5px;
    width: 90%;
    }
</style>

<?php 
function print_content($i)
{

    $o_data = new Db();
    $query = "SELECT *
    from plugin_cms_home
    where cell_id = ".$i.";";
    $qr_result = $o_data->query($query);

    $result = $qr_result->getAllRows()[0];
    switch ($result["type"]):
        case 1:
        case 2:
        case 3:

            $vt_page = new ca_site_pages($result["value_id"]);

            $title = $vt_page->get("title");

            if ($result["image"]){
                $image = $result["image"];
            }else{
                $content = $vt_page->get("content");
                $image =json_decode($content["blocs"], true)["blocks"][0]["data"]["url"];

            }

            print '<div style="background-image: url('.$image.'); background-size: cover; height: 100%;display: flex;flex-direction: column;position: relative;opacity: 0.7; justify-content: center;"><span style="float:left;color:white;">' . $i. '</span><p style="text-align: center;background-color:white;"><b>' . $title . '</b></p></div>';

            break;
        case 4:
            if ($result["image"]){
                $image = $result["image"];
            }
            $content = base64_decode($result["text_content"]);
            print '<div style="background-image: url('.$image.'); background-size: cover; height: 100%;display: flex;flex-direction: column;position: relative;opacity: 0.7; justify-content: center;"><span style="float:left;color:white;">' . $i. '</span><p style="text-align: center;background-color:white;"><b>' . $content . '</b></p></div>';
            break;

        case 5:
            print '<div style="background-color: #571514; height: 100%;display: flex;flex-direction: column;position: relative;opacity: 0.7; justify-content: center;"><span style="float:left;color:white;">' . $i. '</span><p style="text-align: center;background-color:white;">Bloc statisitque</p></div>';
            break;


    endswitch;

   
}
?>