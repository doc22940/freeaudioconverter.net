/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

// Hitting the enter key is the same thing as clicking on the upload button.
document.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        document.getElementById("upload_btn").click();
    }
});

// Only show the div relevant to the selected codec.
function showHide(value) {
    
    if (value=='MP3') {
        document.getElementById('MP3').style.display = 'block';
        document.getElementById('mp3_encoding_div').style.display = 'block';
        document.getElementById("mp3_encoding_type").selectedIndex = 3;
        document.getElementById('mp3sliderdiv').style.display = 'block';
        document.getElementById('mp3_vbr_setting_div').style.display = 'none';
        document.getElementById('y-switch-div').style.display = 'none';
        document.getElementById("Opus").style.display = 'none';
        document.getElementById("dts-div").style.display = 'none';
        document.getElementById('flac').style.display = 'none';
        document.getElementById('Vorbis').style.display = 'none';
        document.getElementById('vorbis_opus_vbr_bitrate').style.display = 'none';
        document.getElementById('ac3-div').style.display = 'none';
        document.getElementById('wav_flac_msg').style.display = 'none';
        document.getElementById('AAC').style.display = 'none';
    }
    
    else if (value=='AAC') {
        document.getElementById('AAC').style.display = 'block';
        document.getElementById('fdk-type').style.display = 'block';
        document.getElementById('fdk_encoding').selectedIndex = 1;
        document.getElementById('fdk_cbr_div').style.display = 'block';;
        document.getElementById('is-lowpass-div').style.display = 'block';
        document.getElementById('no').checked = true;
        document.getElementById('fdk-lowpass-div').style.display = 'none';
        document.getElementById('fdk-vbr').style.display = 'none';
        document.getElementById("Opus").style.display = 'none';
        document.getElementById("dts-div").style.display = 'none';
        document.getElementById('flac').style.display = 'none';
        document.getElementById('MP3').style.display = 'none';
        document.getElementById('Vorbis').style.display = 'none';
        document.getElementById('vorbis_opus_vbr_bitrate').style.display = 'none';
        document.getElementById('ac3-div').style.display = 'none';
        document.getElementById('wav_flac_msg').style.display = 'none';
    }
    
    else if (value=='AC3') {
        document.getElementById('ac3-div').style.display = 'block';
        document.getElementById("Opus").style.display = 'none';
        document.getElementById("dts-div").style.display = 'none';
        document.getElementById('flac').style.display = 'none';
        document.getElementById('MP3').style.display = 'none';
        document.getElementById('Vorbis').style.display = 'none';
        document.getElementById('vorbis_opus_vbr_bitrate').style.display = 'none';
        document.getElementById('AAC').style.display = 'none';
        document.getElementById('wav_flac_msg').style.display = 'none';
    }

    else if (value=='Opus') {
        document.getElementById("Opus").style.display = 'block';
        document.getElementById("opus-encoding").style.display = 'block';
        document.getElementById('opus-encoding-type').selectedIndex = 1;
        document.getElementById("vorbis_opus_vbr_bitrate").style.display = 'block';
        document.getElementById('opus-cbr-bitrate').style.display = 'none';
        document.getElementById("dts-div").style.display = 'none';
        document.getElementById('flac').style.display = 'none';
        document.getElementById('MP3').style.display = 'none';
        document.getElementById('Vorbis').style.display = 'none';
        document.getElementById('ac3-div').style.display = 'none';
        document.getElementById('wav_flac_msg').style.display = 'none';
        document.getElementById('AAC').style.display = 'none';
    }

    else if (value=='Vorbis') {
        document.getElementById('Vorbis').style.display = 'block';
        document.getElementById('vorbis_encoding_div').style.display = 'block';
        document.getElementById("vorbis_encoding").selectedIndex = 1;
        document.getElementById('vorbis_opus_vbr_bitrate').style.display = 'block';
        document.getElementById("Opus").style.display = 'none';
        document.getElementById("dts-div").style.display = 'none';
        document.getElementById('flac').style.display = 'none';
        document.getElementById('vorbis_quality_div').style.display = 'none';
        document.getElementById('MP3').style.display = 'none';
        document.getElementById('ac3-div').style.display = 'none';
        document.getElementById('wav_flac_msg').style.display = 'none';
        document.getElementById('AAC').style.display = 'none';
    }

    else if (value=='FLAC') {
        document.getElementById('flac').style.display = 'block';
        document.getElementById("Opus").style.display = 'none';
        document.getElementById("dts-div").style.display = 'none';
        document.getElementById('vorbis_opus_vbr_bitrate').style.display = 'none';
        document.getElementById('MP3').style.display = 'none';
        document.getElementById('Vorbis').style.display = 'none';
        document.getElementById('ac3-div').style.display = 'none';
        document.getElementById('wav_flac_msg').style.display = 'none';
        document.getElementById('AAC').style.display = 'none';
    }

    else if (value=='DTS') {
        document.getElementById("dts-div").style.display = 'block';
        document.getElementById("Opus").style.display = 'none';
        document.getElementById('flac').style.display = 'none';
        document.getElementById('vorbis_opus_vbr_bitrate').style.display = 'none';
        document.getElementById('MP3').style.display = 'none';
        document.getElementById('Vorbis').style.display = 'none';
        document.getElementById('ac3-div').style.display = 'none';
        document.getElementById('wav_flac_msg').style.display = 'none';
        document.getElementById('AAC').style.display = 'none';
    }

    else {
        document.getElementById('wav_flac_msg').style.display = 'block';
        document.getElementById("Opus").style.display = 'none';
        document.getElementById("dts-div").style.display = 'none';
        document.getElementById('flac').style.display = 'none';
        document.getElementById('MP3').style.display = 'none';
        document.getElementById('Vorbis').style.display = 'none';
        document.getElementById('vorbis_opus_vbr_bitrate').style.display = 'none';
        document.getElementById('ac3-div').style.display = 'none';
        document.getElementById('AAC').style.display = 'none';
    }
}

// Show MP3 CBR div by default



// // Show Opus VBR div by default
// if (document.getElementsByName('codecs')[0].selectedOptions[0].value === "Opus") {
//     document.getElementById('Opus').style.display = 'block';
//     document.getElementById('opus-encoding').value === 'opus-vbr';
//     document.getElementById('vorbis_opus_vbr_bitrate').style.display = 'block';
//     document.getElementById('opus-cbr-bitrate').style.display = 'none';
// }

function showHideMP3(value) {
    if (value=='cbr' || value=='abr') {
        document.getElementById('mp3sliderdiv').style.display = 'block';
        document.getElementById('y-switch-div').style.display = 'none';
        document.getElementById('mp3_vbr_setting_div').style.display = 'none';
}
    else {
        document.getElementById('mp3_vbr_setting_div').style.display = 'block';
        document.getElementById('y-switch-div').style.display = 'block';
        document.getElementById('mp3sliderdiv').style.display = 'none';
    }
}

function fdkEncodingType(value) {
    if (value=='fdk-cbr') {
        document.getElementById('fdk-type').style.display = 'block';
        document.getElementById('fdk_cbr_div').style.display = 'block';
        document.getElementById('is-lowpass-div').style.display = 'block';
        document.getElementById('no').checked = true;
        document.getElementById('fdk-lowpass-div').style.display = 'none';
        document.getElementById('fdk-vbr').style.display = 'none';  
    }
    else {
        document.getElementById('fdk-type').style.display = 'block';
        document.getElementById('fdk-vbr').style.display = 'block';
        document.getElementById('is-lowpass-div').style.display = 'block';
        document.getElementById('no').checked = true;
        document.getElementById('fdk-lowpass-div').style.display = 'none';
        document.getElementById('fdk_cbr_div').style.display = 'none';
    }
}

function isFDKLowpass() {
    if (document.getElementById('yes').checked) {
        document.getElementById('fdk-lowpass-div').style.display = 'block';
    } else {
        document.getElementById('fdk-lowpass-div').style.display = 'none';
    }
}

function showHideAAC(value) {
    if (value=='cbr' || value=='abr') {
        document.getElementById('aac_cbr_div').style.display = 'block';
        document.getElementById('fdk_cbr_div').style.display = 'none';
        document.getElementById('fdk-vbr').style.display = 'none';
    }
    else if (value=='tvbr') {
        document.getElementById('aac_tvbr_div').style.display = 'block';
        document.getElementById('fdk_cbr_div').style.display = 'none';
        document.getElementById('fdk-vbr').style.display = 'none';
    }

    else {
        document.getElementById('aac_vbr_div').style.display = 'block';
        document.getElementById('fdk_cbr_div').style.display = 'none';
        document.getElementById('fdk-vbr').style.display = 'none';
    }
}

// Vorbis
function showHideVorbis(value) {
    if (value=='vbr_bitrate') {
        document.getElementById('vorbis_opus_vbr_bitrate').style.display = 'block';
        document.getElementById('vorbis_quality_div').style.display = 'none';
}
    else {
        document.getElementById('vorbis_quality_div').style.display = 'block';
        document.getElementById('vorbis_opus_vbr_bitrate').style.display = 'none';
    }
}

// Opus
function opusEncodingType(value) {
    if (value=='opus-cbr') {
        document.getElementById('opus-cbr-bitrate').style.display = 'block';
        document.getElementById('vorbis_opus_vbr_bitrate').style.display = 'none';
}
    else {
        document.getElementById('vorbis_opus_vbr_bitrate').style.display = 'block';
        document.getElementById('opus-cbr-bitrate').style.display = 'none';
    }
}

// Slider for MP3
const mp3slider = document.getElementById("cbr_abr_bitrate");
const mp3output = document.getElementById("mp3value");
mp3output.innerHTML = mp3slider.value + " kbps";
// Update the current slider value (each time you drag the slider handle)
mp3slider.oninput = function () {
    mp3output.innerHTML = this.value + " kbps";
}

// Slider for FDK CBR
const fdkslider = document.getElementById("fdk-slider-aac");
const fdkoutput = document.getElementById("fdkvalue");
fdkoutput.innerHTML = fdkslider.value + "kbps";
fdkslider.oninput = function () {
    fdkoutput.innerHTML = this.value + "kbps";
}

// Slider for Vorbis Quality
const vorbisslider = document.getElementById("vorbis_quality");
const vorbisoutput = document.getElementById("vorbisvalue");
vorbisoutput.innerHTML = "-q " + vorbisslider.value;
vorbisslider.oninput = function () {
    vorbisoutput.innerHTML = "-q " + this.value;
}

// Target VBR bitrate slider for Vorbis/Opus.
const slider = document.getElementById("slider");
const output = document.getElementById("value");
output.innerHTML = slider.value + "kbps";
slider.oninput = function () {
    output.innerHTML = this.value + "kbps";
}

// // Opus CBR.
// const opus_cbr_slider = document.getElementById("opus_cbr_slider");
// const opusoutput = document.getElementById("opuscbrvalue");
// opusoutput.innerHTML = "kbps";
// opus_cbr_slider.oninput = function () {
//     opusoutput.innerHTML = "kbps";
// }

// Slider for FLAC
const flacslider = document.getElementById("flac_compression");
const flacoutput = document.getElementById("flac_value");
flacoutput.innerHTML = flacslider.value;
flacslider.oninput = function () {
    flacoutput.innerHTML = this.value;
}

// Slider for DTS
const dtsslider = document.getElementById("dts-slider");
const dtsoutput = document.getElementById("dtsvalue");
dtsoutput.innerHTML = dtsslider.value + "kbps";
dtsslider.oninput = function () {
    dtsoutput.innerHTML = this.value + "kbps";
}