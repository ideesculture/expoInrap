<?php
$content = $this->getVar("content");
$expo_id = $this->getVar("expo_id");
$is_version = $this->getVar("is_version");
$versions = $this->getVar("versions");
if (!$content["blocs"]) {
    $content["blocs"] = [];
}
//print $content["blocs"];die();

?>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<link href="<?= __CA_URL_ROOT__ ?>/app/plugins/expoInrap/lib/ideesculture-editorjs-diapotitre/simple-diapotitre.css" rel="stylesheet">
<link href="<?= __CA_URL_ROOT__ ?>/app/plugins/expoInrap/lib/ideesculture-editorjs-diapointer/simple-diapointer.css" rel="stylesheet">
<link href="<?= __CA_URL_ROOT__ ?>/app/plugins/expoInrap/lib/ideesculture-editorjs-diapointer2/simple-diapointer2.css" rel="stylesheet">
<link href="<?= __CA_URL_ROOT__ ?>/app/plugins/expoInrap/lib/ideesculture-editorjs-objectset/simple-objectset.css" rel="stylesheet">
<link href="<?= __CA_URL_ROOT__ ?>/app/plugins/expoInrap/lib/ideesculture-editorjs-objectbam/simple-objectbam.css" rel="stylesheet">
<link href="<?= __CA_URL_ROOT__ ?>/app/plugins/expoInrap/lib/ideesculture-editorjs-diapofin/simple-diapofin.css" rel="stylesheet">

<link href="<?= __CA_URL_ROOT__ ?>/app/plugins/expoInrap/lib/ideesculture-editorjs-table/table.css" rel="stylesheet">

<script src="https://cdn.jsdelivr.net/npm/@editorjs/editorjs@latest"></script>
<script src="https://cdn.jsdelivr.net/npm/@editorjs/header@latest"></script>
<script src="https://cdn.jsdelivr.net/npm/@editorjs/paragraph@latest"></script>
<script src="https://cdn.jsdelivr.net/npm/@editorjs/list@latest"></script>
<script src="https://cdn.jsdelivr.net/npm/@editorjs/embed@latest"></script>
<script src="https://cdn.jsdelivr.net/npm/@editorjs/delimiter@latest"></script>
<script src="https://cdn.jsdelivr.net/npm/@editorjs/quote@latest"></script>
<script src="<?= __CA_URL_ROOT__ ?>/app/plugins/expoInrap/lib/ideesculture-editorjs-image/simple-image.js"></script>
<script src="<?= __CA_URL_ROOT__ ?>/app/plugins/expoInrap/lib/ideesculture-editorjs-diapotitre/simple-diapotitre.js"></script>
<script src="<?= __CA_URL_ROOT__ ?>/app/plugins/expoInrap/lib/ideesculture-editorjs-diapointer/simple-diapointer.js"></script>
<script src="<?= __CA_URL_ROOT__ ?>/app/plugins/expoInrap/lib/ideesculture-editorjs-diapointer2/simple-diapointer2.js"></script>
<script src="<?= __CA_URL_ROOT__ ?>/app/plugins/expoInrap/lib/ideesculture-editorjs-object/simple-object.js"></script>
<script src="<?= __CA_URL_ROOT__ ?>/app/plugins/expoInrap/lib/ideesculture-editorjs-objectset/simple-objectset.js"></script>
<script src="<?= __CA_URL_ROOT__ ?>/app/plugins/expoInrap/lib/ideesculture-editorjs-bamset/simple-bamset.js"></script>
<script src="<?= __CA_URL_ROOT__ ?>/app/plugins/expoInrap/lib/ideesculture-editorjs-objectbam/simple-objectbam.js"></script>
<script src="<?= __CA_URL_ROOT__ ?>/app/plugins/expoInrap/lib/ideesculture-editorjs-diapofin/simple-diapofin.js"></script>

<script src="https://cdn.jsdelivr.net/npm/@editorjs/table@2.0.2/dist/table.js"></script>


<div class="row">
    <h1> Modification de l'exposition</h1>
    <div class="mb-3 row">
        <label for="staticEmail" class="col-sm-2 col-form-label">Titre</label>
        <div class="col-sm-10">
            <input type="text" class="form-control-plaintext" id="staticEmail" value="<?= $content["title"]; ?>">
        </div>
    </div>
    <div class="row" style="padding:4px 0">
        <div class="col-md-3">
            <button class="btn btn-primary saveButton" style="width:100%" disabled="disabled" onclick="articleSave()">
                <?php if ($is_version) : ?>
                    Restaurer cette version
                <?php else : ?>
                    Enregistrer
                <?php endif; ?>
            </button>
        </div>
        <div class="col-md-3">
            <a href="https://galeriemuseale.inrap.fr/index.php/Expositions/ShowJeunesse/Details/id/<?= $expo_id ?>" target="_blank"><button class="btn btn-light" style="width:100%">Aperçu</button></a>
        </div>
        <div class="col-md-3">
            <button class="btn btn-light" style="width:100%" id="versionsButton" onclick="$('#versions').toggle();">Anciennes versions</button>
        </div>
        <div class="col-md-3">
            <button class="btn btn-danger" style="width:100%" id="deleteButton" onclick="displayOldVersions()">Supprimer</button>
        </div>
    </div>
    <div class="row" id="versions" style="display:none;padding:10px 0;">
        <div class="col-md-12">
            VERSIONS :
            <?php
            if (sizeof($versions) > 10) print "<span id='debut_versions' style='display:none;'>";
            foreach ($versions as $index => $version) {
                if ((sizeof($versions) - $index) == 11) print "</span>... ";
                print '<a href="' . __CA_URL_ROOT__ . '/index.php/expoInrap/Jeunesse/EditFormFromVersion/expo_id/' . $expo_id . '/version/' . $version["version"] . '"><span class="badge badge-primary" style="background:blue">' . $version["version"] . '</span></a>';
                if ($index < sizeof($versions) - 1) print ", ";
            }
            ?>
            <?php if ($is_version) : ?>
                <a href="<?= __CA_URL_ROOT__ ?>/index.php/expoInrap/Exposition/EditForm/expo_id/<?= $expo_id ?>">
                    <button class="btn btn-warning">Revenir à la version actuelle</button>
                </a>
            <?php endif; ?>

        </div>
    </div>
    <iframe src="/upload/manual.php" style="width:100%;height:46px;"></iframe>
    <div id="editorjs"></div>

    <div class="row" style="padding:4px 0">
        <div class="col-md-6">
            <button class="btn btn-primary saveButton" style="width:100%" disabled="disabled" onclick="articleSave()">
                <?php if ($is_version) : ?>
                    Restaurer cette version
                <?php else : ?>
                    Enregistrer
                <?php endif; ?>
            </button>
        </div>
        <div class="col-md-3">
            <button class="btn btn-light" style="width:100%" id="versionsButton" disabled="disabled" onclick="displayOldVersions()">Afficher les anciennes versions</button>
        </div>
        <div class="col-md-3">
            <button class="btn btn-danger" style="width:100%" id="deleteButton" disabled="disabled" onclick="displayOldVersions()">Supprimer</button>
        </div>
    </div>

</div>


<style>
    #leftNav {
        display: none;
    }

    .diapo {
        border-bottom: 10px solid white;
    }

    #mainContent {
        margin-left: 0;
        width: 969px;
        border-left: 2px solid #ddd;
    }

    .expo-button {
        padding: 10px;
        display: inline-block;
        font-size: 15px;
        color: white !important;
        background-color: #1ab3c8;
        text-decoration: none !important;
        margin-bottom: 5px;
        border: inherit;
    }

    .expo-button:hover {
        text-decoration: underline !important;
    }

    .ce-block__content {
        max-width: 800px;
    }

    .ce-toolbar__content {
        max-width: 810px;
    }

    h3 {
        font-weight: 800;
        font-size: 1.333em;
        padding-bottom: 20px;
        margin: 0;
        letter-spacing: -0.050em;
        line-height: 22px;
        color: #3f3f3f;
    }

    .diapo a {
        color: #699696 !important;
    }

    h2 {
        color: white;
    }

    #descri span {
        font-size: inherit !important;
    }

    #colorInput {
        color: black;
    }

    .legend {
        min-height: inherit !important;
    }

    .copyright {
        writing-mode: initial !important;
        transform: none !important;
        min-width: 20px;
        display: inline-block;
    }

    .legend {
        display: inline-block;
        min-width: 50px;
    }

   
</style>
<script>
    const editor = new EditorJS({
        holder: 'editorjs',

        /**
         * Available Tools list.
         * Pass Tool's class or Settings object for each Tool you want to use
         */
        tools: {
            diapoTitre: {
                class: IdeescultureEditorjsDiapoTitre,
                inlineToolbar: true
            },
            diapoInter: {
                class: IdeescultureEditorjsDiapoInter,
                inlineToolbar: true
            },
            diapoInter2: {
                class: IdeescultureEditorjsDiapoInter2,
                inlineToolbar: true
            },
            object: {
                class: IdeescultureEditorjsObject,
                inlineToolbar: true
            },
            objectset: {
                class: IdeescultureEditorjsObjectSet,
                inlineToolbar: false
            },
            bamset: {
                class: IdeescultureEditorjsBamSet,
                inlineToolbar: false
            },
            objectbam: {
                class: IdeescultureEditorjsObjectBam,
                inlineToolbar: true
            },
            diapofin: {
                class: IdeescultureEditorjsDiapoFin,
                inlineToolbar: true
            },
            animationDiapo: {
                class: Table,
                inlineToolbar: true,
                config: {
                    rows: 5,
                    cols: 3,
                },
            }

        },
        data: <?= $content["blocs"] ?>,
        onReady: () => {
            // GM : Next lines are a DEBUG for stretched CSS class added on the wrapper.
            $(".stretched").parent().parent().addClass("ce-block--stretched");
            $(".simple-image").not(".stretched").parent().parent().removeClass("ce-block--stretched");
            $(".ce-paragraph").not(".stretched").parent().parent().removeClass("ce-block--stretched");
            // GM : required for float left & right image options
            $(".simple-image").parent().removeClass("floatRight");
            $(".simple-image").parent().removeClass("floatLeft");
            $('.simple-image.floatLeft').parent().addClass('floatLeft');
            $('.simple-image.floatRight').parent().addClass('floatRight');
            $(".saveButton").prop("disabled", false);
            $(".diapo").each(function() {
                $(this).find("a").each(function() {
                    $(this).attr('target', "_blank");
                })
            })
        }
    });

    function articleSave() {
        editor.save().then((output) => {
            let cog = jQuery('<i class="mdi mdi-cogs is-large savingicon"></i>');
            jQuery(".podcast-phoi").parent().append(cog);

            $("html, body").animate({
                scrollTop: 30
            }, "slow");
            jQuery(".podcast-phoi").css("opacity", "0.1");
            //console.log(JSON.stringify(output));
            $.ajax({
                    method: "POST",
                    url: "<?php print __CA_URL_ROOT__; ?>/index.php/expoInrap/Jeunesse/SaveExpoJson/id/<?= $expo_id ?>",
                    data: output,
                    dataType: "json"
                })
                .done(function(result) {
                    //console.log("result");
                    $("html, body").animate({
                        scrollTop: 30
                    }, "slow");
                    jQuery(".savingicon").remove();
                    jQuery(".podcast-phoi").css("opacity", "1");

                    //console.log(output.blocks[4]);
                    //console.log(output);
                    if (result.result == "ok") {
                        // Rechargement de la page une fois enregistrée
                        //console.log("[ENDING SAVING] -- OK");
                        document.location.href = "<?= __CA_URL_ROOT__ ?>/index.php/expoInrap/Jeunesse/EditForm/expo_id/<?= $expo_id ?>";
                    }
                });
        }).catch((error) => {
            alert("Erreur lors de l'enregistrement");
            jQuery(".savingicon").remove();
            jQuery(".podcast-phoi").css("opacity", "1");
            console.log('Saving failed: ', error)
        });
    }
    jQuery(document).ready(function() {
        $(".stretched").parent().parent().addClass("ce-block--stretched");
        
    })
</script>