 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Awesome SAR Protocol</title>

    <!-- Highcharts libraries -->
    <script src="https://code.highcharts.com/highcharts.js"></script>
    <script src="https://code.highcharts.com/modules/treemap.js"></script>
    <script src="https://code.highcharts.com/modules/treegraph.js"></script>
    <script src="https://code.highcharts.com/modules/exporting.js"></script>
    <script src="https://code.highcharts.com/modules/accessibility.js"></script>

    <!-- CSS styling -->
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            text-align: center;
        }

        .logo-container {
            margin: 20px 0;
        }

        .logo-image {
            max-width: 150px; /* Adjust the size for the logo */
            height: auto;
        }

        .screenshot-image {
            margin: 20px 0;
            max-width: 400px; /* Adjust the size for the screenshot */
            height: auto;
        }

        #container {
            max-width: 1200px;
            min-width: 360px;
            margin: 0 auto;
            height: 800px;
        }

        .highcharts-figure {
            position: relative;
        }

        .page-title {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 20px;
        }
    </style>
</head>
<body>

    <!-- Title -->
    <div class="page-title">PROTOCOLE_INSAR_SMTSI_PROJECT_TEAM</div>

    <!-- CRAAG logo at the center (replace with your logo) -->
    <div class="logo-container">
        <img src="https://i.ibb.co/XZc5S0j/Webp-net-resizeimage.jpg" alt="Logo CRAAG" class="logo-image">
    </div>
    
<!-- Additional Screenshot Image in the center -->
    <div>
        <img src="https://i.ibb.co/zsKdYfc/Screenshot-from-2024-08-24-13-02-46.png" alt="Screenshot Image" class="screenshot-image">
    </div>
    <!-- Container for the Highcharts chart -->
    <figure class="highcharts-figure">
        <div id="container"></div>
        <p class="highcharts-description">
"Student Protocol for Radar Interferometry, created by the SMTSI_PROJECT_TEAM, providing a comprehensive guide to the concepts, methods, and applications of InSAR."
</p>
    </figure>
 <!-- Team Members Section -->
    <div class="team-section">
        <div class="team-member">
            <img src="https://i.ibb.co/nDgCZtY/333948820-744616687016636-1314239124476083328-n.jpg" alt="Aguemoune Samir">
            <p>Project Manager: Aguemoune Samir</p>
        </div>

        <div class="team-member">
            <p>Team: Seismic Zoning</p>
            <p>Division: Seismological Study</p>
        </div>

        <div class="team-member">
            <img src="https://i.ibb.co/Zd5G10g/Capture-d-cran-2023-02-14-135241.jpg" alt="Ayadi Abdelhakim">
            <p>Ayadi Abdelhakim (DR, CRAAG)</p>
        </div>

        <div class="team-member">
            <img src="https://i.ibb.co/980bmR3/Farida-Ousadou.jpg" alt="Ousadou Farida">
            <p>Ousadou Farida (HDR, CRAAG)</p>
        </div>

        <div class="team-member">
            <img src="https://i.ibb.co/zX8fMNZ/Mohamed-Hassani-2.jpg" alt="Hassani Mohamed">
            <p>Hassani Mohamed (MC A, USTHB)</p>
        </div>

        <div class="team-member">
            <img src="https://i.ibb.co/pPfFgRN/Amar-Bellik.jpg" alt="Amar Bellik">
            <p>Amar Bellik (PhD Student, AR: CRAAG)</p>
        </div>

        <div class="team-member">
            <img src="https://i.ibb.co/3swbcg1/460199280-876990110658975-8120874858496923459-n.jpg" alt="Chaib Idir">
            <p>Chaib Idir (PhD Student, Master of Science)</p>
        </div>

        <div class="team-member">
            <img src="https://i.ibb.co/qCZMPjB/460351334-8561005173922444-6639264841941651155-n.jpg" alt="Boudhan Boubaker">
            <p>Boudhan Boubaker (PhD Student, USTHB)</p>
        </div>

        <div class="team-member">
            <img src="/path_to_image/ouledhacini.jpg" alt="Ouledhacini Abdelkader">
            <p>Ouledhacini Abdelkader (Geophysicist, Master's in Sciences, Tamanrasset Unit)</p>
        </div>
    </div>

    <!-- JavaScript for Highcharts -->
    <script>







        const data = [
            {
                id: '0.0',
                parent: '',
                name: 'Awesome SAR',
                image: 'https://i.ibb.co/BK2w2HJ/Screenshot-from-2024-09-10-22-20-06.png'
            },
            {
                id: '1.0',
                parent: '0.0',
                subtitle: 'Software capable of multiple processing steps',
                name: 'General'
            },
            {
                id: '2.0',
                parent: '0.0',
                name: 'InSAR Processing Software',
                image: 'https://i.ibb.co/TqrrTcH/Screenshot-from-2024-09-10-22-47-47.png'
            },
            {
                id: '3.0',
                parent: '0.0',
                name: 'PolSAR Processing Software',
                image: 'https://i.ibb.co/BnPK9V0/psp-thumb.png'
            },
            {
                id: '4.0',
                parent: '0.0',
                name: 'Time Series Analysis Software',
                image: 'https://i.ibb.co/M5Hsnp8/41467-2021-26254-Fig1-HTML.png'
            },
            {
                id: '5.0',
                parent: '0.0',
                name: 'Noise Correction Software',
                image: 'https://i.ibb.co/98W8Py3/IONO-TROPO-LAYERS-AND-THEIR-EFFECT-ON-THE-GNSS-SIGNAL.jpg'
            },
            {
                id: '6.0',
                parent: '0.0',
                name: 'Geospatial Tools',
                image: 'https://i.ibb.co/bWVBRbm/GIS-header-icon-art.png'
            },
            {
                id: '7.0',
                parent: '0.0',
                name: 'Radar Related GitHub Repos'
            },
            {
                id: '8.0',
                parent: '0.0',
                name: 'Resources'
            },
            {
                id: '1.1',
                parent: '1.0',
                name: 'SNAP',
                url: 'https://step.esa.int/main/download/snap-download/',
                image: 'https://i.ibb.co/5GzRcvW/SNAP-icon-400x400.jpg'
            },
            {
                id: '1.2',
                parent: '1.0',
                name: 'Orfeo Toolbox',
                url: 'https://www.orfeo-toolbox.org/',
                image: 'https://i.ibb.co/xMRhJBS/orfeo.png'
            },
            {
                id: '1.3',
                parent: '1.0',
                name: 'SARscape',
                url: 'https://www.sarmap.ch/',
                image: 'https://i.ibb.co/prxB3Y3/images-sarscape.jpg'
            },
            {
                id: '1.4',
                parent: '1.0',
                name: 'SARbian',
                url: 'https://eo-college.org/',
                image: 'https://i.ibb.co/rfn0B5Z/eo-college-1024x1024-768x768.jpg'
            },
            {
                id: '2.1',
                parent: '2.0',
                name: 'GMTSAR',
                url: 'https://topex.ucsd.edu/gmtsar/',
                image: 'https://i.ibb.co/mzBNVHm/Screenshot-from-2024-09-09-22-26-43.png'
            },
            {
                id: '2.2',
                parent: '2.0',
                name: 'ISCE2',
                url: 'https://winsar.unavco.org/software/isce',
                image: 'https://i.ibb.co/FhQpDWV/titleleft.jpg'
            },
            {
                id: '2.3',
                parent: '2.0',
                name: 'Doris',
                url: 'http://doris.tudelft.nl/',
                image: 'https://i.ibb.co/rdKSPmJ/unnamed.gif'
            },
            {
                id: '2.4',
                parent: '2.0',
                name: 'Gamma',
                url: 'https://www.gamma-rs.ch/',
                image: 'https://i.ibb.co/jz0zftB/504x106-076afa68ebbad33ef76264838a3bf923.jpg'
            },
            {
                id: '2.5',
                parent: '2.0',
                name: 'SARscape',
                url: 'https://www.sarmap.ch/',
                image: 'https://i.ibb.co/prxB3Y3/images-sarscape.jpg'
            },
            {
                id: '3.1',
                parent: '3.0',
                name: 'PolSARPro',
                url: 'https://www.eo.esa.int/ESA_HTML/PEP/Pages/products/polsarpro.html',
                image: 'https://i.ibb.co/fQSQNsF/psp-thumb.png'
            },
            {
                id: '3.2',
                parent: '3.0',
                name: 'PolSARPro updates for Linux',
                url: 'https://github.com/fpl/polsarpro',
                image: 'https://i.ibb.co/fQSQNsF/psp-thumb.png'
            },
            {
                id: '3.3',
                parent: '3.0',
                name: 'RAT',
                url: 'https://github.com/birgander2/RAT/tree/master',
                image: 'https://i.ibb.co/pb23FYg/t-l-chargement.jpg'
            },
            {
                id: '4.1',
                parent: '4.0',
                name: 'MintPy',
                url: 'https://github.com/insarlab/MintPy',
                image: 'https://i.ibb.co/cTHRRMB/images-mintpy.png'
            },
            {
                id: '4.2',
                parent: '4.0',
                name: 'PyRate',
                url: 'https://geoscienceaustralia.github.io/PyRate/',
                image: 'https://i.ibb.co/bPRtx91/Py-Rate-logo.png'
            },
            {
                id: '4.3',
                parent: '4.0',
                name: 'GIAnT',
                url: 'https://www.yumpu.com/en/document/view/9795748/the-generic-insar-analysis-toolbox-earthdef-california-institute-',
                image: 'https://i.ibb.co/7yVSmQ9/t-l-chargement-1.jpg'
            },
            {
                id: '4.4',
                parent: '4.0',
                name: 'SARPROZ',
                url: 'https://www.sarproz.com/',
                image: 'https://i.ibb.co/HgKMH4T/t-l-chargement-2.jpg'
            },
            {
                id: '4.5',
                parent: '4.0',
                name: 'StaMPS/MTI',
                url: 'https://homepages.see.leeds.ac.uk/~earahoo/stamps/',
                image: 'https://i.ibb.co/QFNTkQr/Alcedo-ERS-desc.jpg'
            },
            {
                id: '4.6',
                parent: '4.0',
                name: 'SARscape',
                url: 'https://www.sarmap.ch/',
                image: 'https://i.ibb.co/prxB3Y3/images-sarscape.jpg'
            },
            {
                id: '4.7',
                parent: '4.0',
                name: 'KFTS',
                url: 'https://github.com/ManonDls/KFTS-InSAR',
                image: 'https://i.ibb.co/hW0BZ2j/t-l-chargement-3.jpg'
            },
            {
                id: '4.8',
                parent: '4.0',
                name: 'MPITS',
                url: 'https://github.com/jolivetr/mpits',
                image: 'https://i.ibb.co/JdzBshC/t-l-chargement-4.jpg'
            },
            {
                id: '5.1',
                parent: '5.0',
                name: 'PyAPS',
                url: 'https://github.com/insarlab/PyAPS',
                image: 'https://i.ibb.co/rZg3ntX/PyAPS.png'
            },
            {
                id: '5.2',
                parent: '5.0',
                name: 'PySolid',
                url: 'https://github.com/insarlab/PySolid',
                image: 'https://i.ibb.co/DzFGWY9/41709654.png'
            },
            {
                id: '5.3',
                parent: '5.0',
                name: 'TRAIN',
                url: 'https://www.davidbekaert.com/#links',
                image: 'https://i.ibb.co/r0r6yc1/TRAIN.png'
            },
            {
                id: '6.1',
                parent: '6.0',
                name: 'ASF Map Ready',
                url: 'https://github.com/asfadmin/ASF_MapReady',
                image: 'https://i.ibb.co/JmdGLZf/t-l-chargement-29.png'
            },
            {
                id: '6.2',
                parent: '6.0',
                name: 'GDAL',
                url: 'https://gdal.org/',
                image: 'https://i.ibb.co/mTyRRmJ/gdal.png'
            },
            {
                id: '6.3',
                parent: '6.0',
                name: 'GMT - Generic Mapping Tools',
                url: 'https://www.generic-mapping-tools.org/',
                image: 'https://i.ibb.co/gghcbpq/gmt-logo.png'
            },
            {
                id: '6.4',
                parent: '6.0',
                name: 'QGIS',
                url: 'https://www.qgis.org/',
                image: 'https://i.ibb.co/b622w5r/t-l-chargement-30.png'
            },
            {
                id: '6.5',
                parent: '6.0',
                name: 'GRASS',
                url: 'https://grass.osgeo.org/',
                image: 'https://i.ibb.co/xX9bPcF/t-l-chargement-5.jpg'
            },
            {
                id: '6.6',
                parent: '6.0',
                name: 'GEE Code Editor',
                url: 'https://earthengine.google.com/platform/',
                image: 'https://i.ibb.co/sV7Pp5s/t-l-chargement-31.png'
            },
            {
                id: '7.1',
                parent: '7.0',
                name: 'SentinelSat',
                url: 'https://github.com/sentinelsat/sentinelsat',
                image: 'https://i.ibb.co/NLkjH5b/t-l-chargement-32.png'
            },
            {
                id: '7.2',
                parent: '7.0',
                name: 'SSARA',
                url: 'https://ssara.org/',
                image: 'https://i.ibb.co/kqXQKC8/ssara.png'
            },
            {
                id: '7.3',
                parent: '7.0',
                name: 'CDSETool',
                url: 'https://github.com/CDSETool/CDSETool',
                image: 'https://i.ibb.co/BVntvpD/t-l-chargement-33.png'
            },
            {
                id: '7.4',
                parent: '7.0',
                name: 'CopernicusAPi',
                url: 'https://github.com/armkhudinyan/copernicus_api',
                image: 'https://i.ibb.co/Kzbsj69/t-l-chargement-34.png'
            },
            {
                id: '7.5',
                parent: '7.0',
                name: 'EODAG',
                url: 'https://github.com/CS-SI/eodag',
                image: 'https://i.ibb.co/gyjhTnS/t-l-chargement-35.png'
            },
            {
                id: '7.6',
                parent: '7.0',
                name: 'EODMS API Client',
                url: 'https://github.com/m9brady/eodms-api-client',
                image: 'https://i.ibb.co/VJFhLgz/t-l-chargement-6.jpg'
            },
            {
                id: '8.1',
                parent: '8.0',
                name: 'Data Archives',
                image: 'https://i.ibb.co/vjT9QW7/OIG4.jpg'
            },
            {
                id: '8.2',
                parent: '8.0',
                name: 'Websites'
               /* image: '/home/idir/Desktop/protocole/slides/websites.png'*/
            },
            {
                id: '8.3',
                parent: '8.0',
                name: 'Twitter, X',
                image: 'https://i.ibb.co/fxmqVNF/X.png'
            }
        ];

        Highcharts.chart('container', {
            title: {
                text: 'Awesome SAR Protocol'
            },
            series: [
                {
                    type: 'treegraph',
                    data,
                    tooltip: {
                        pointFormat: '{point.name}'
                    },
                    marker: {
                        symbol: 'rect',
                        width: '25%'
                    },
                    borderRadius: 10,
                    dataLabels: {
                        enabled: true,
                        formatter: function() {
                            const point = this.point;
                            if (point.options.image) {
                                return `<div style="text-align:center; max-width: 100px;"><img src="${point.options.image}" alt="${point.name}" style="max-width: 40px; height: auto;"><br>${point.name}</div>`;
                            }
                            return point.name;
                        },
                        useHTML: true,
                        style: {
                            whiteSpace: 'nowrap'
                        }
                    },
                    levels: [
                        {
                            level: 1,
                            levelIsConstant: false
                        },
                        {
                            level: 2,
                            colorByPoint: true
                        },
                        {
                            level: 3,
                            colorByPoint: false
                        }
                    ],
                    point: {
                        events: {
                            click: function() {
                                if (this.options.url) {
                                    window.open(this.options.url, '_blank');
                                }
                            }
                        }
                    }
                }
            ]
        });
    </script>

</body>
</html>