import os

def ffmpeg(chosen_file, params):
    os.system(f'ffmpeg -y -hide_banner -progress progress.txt -i "{chosen_file}" {params}')

# MP3
def run_mp3(chosen_file, mp3_encoding_type, cbr_abr_bitrate, mp3_vbr_setting, is_y_switch, output_name, is_downmix):
    if mp3_encoding_type == "cbr":  
        ffmpeg(chosen_file, f'-ac 2 -f wav - | lame -b {cbr_abr_bitrate} - "{output_name}".mp3')
    elif mp3_encoding_type == "abr": 
        ffmpeg(chosen_file, f'-ac 2 -f wav - | lame --preset {cbr_abr_bitrate} - "{output_name}".mp3')
    elif mp3_encoding_type == "vbr": 
        if is_y_switch == "no":
            ffmpeg(chosen_file, f'-ac 2 -f wav - | lame -V {mp3_vbr_setting} - "{output_name}".mp3')
        else:
            ffmpeg(chosen_file, f'-ac 2 -f wav - | lame -Y -V {mp3_vbr_setting} - "{output_name}".mp3')

    # (-ac 2 is used because LAME only supports stereo files.)

# AC3
def run_ac3(chosen_file, ac3_bitrate, output_name, is_downmix):
    ffmpeg(chosen_file, f'{is_downmix} -c:a ac3 -b:a {ac3_bitrate}k "{output_name}".ac3')
    
# AAC
def run_aac(chosen_file, fdk_type, fdk_cbr, fdk_vbr, output_name, is_downmix, is_fdk_lowpass, fdk_lowpass):
    if fdk_type == "fdk-cbr":
        if is_fdk_lowpass == "yes":
            ffmpeg(chosen_file, f'{is_downmix} -f wav - | sudo fdkaac --bandwidth {fdk_lowpass} -b {fdk_cbr} - -o "{output_name}".m4a')
        else:
            ffmpeg(chosen_file, f'{is_downmix} -f wav - | sudo fdkaac -b {fdk_cbr} - -o "{output_name}".m4a')
    else: # VBR
        if is_fdk_lowpass == "yes":
            ffmpeg(chosen_file, f'{is_downmix} -f wav - | sudo fdkaac --bandwidth {fdk_lowpass} --bitrate-mode {fdk_vbr} - -o "{output_name}".m4a')
        else:
            ffmpeg(chosen_file, f'{is_downmix} -f wav - | sudo fdkaac --bitrate-mode {fdk_vbr} - -o "{output_name}".m4a')
            
# Opus
def run_opus(chosen_file, opus_encoding_type, slider_value, opus_cbr_bitrate, output_name, is_downmix):
    if opus_encoding_type == "opus-vbr": 
        ffmpeg(chosen_file, f'{is_downmix} -f wav - | opusenc --vbr {slider_value} - "{output_name}".opus')
    else: # CBR
        ffmpeg(chosen_file, f'{is_downmix} -f wav - | opusenc --hard-cbr --bitrate {opus_cbr_bitrate} - "{output_name}".opus')

# FLAC
def run_flac(chosen_file, flac_compression, output_name, is_downmix):
    ffmpeg(chosen_file, f'{is_downmix} -c:a flac -compression_level {flac_compression} "{output_name}".flac')

# Vorbis
def run_vorbis(chosen_file, vorbis_encoding, vorbis_quality, slider_value, output_name, is_downmix):
    # VBR with a nominal bitrate
    if vorbis_encoding == "vbr_bitrate":
        ffmpeg(chosen_file, f'{is_downmix} -f wav - | oggenc -b {slider_value} - -o "{output_name}".ogg')
    elif vorbis_encoding == "vbr_quality": # True VBR
        ffmpeg(chosen_file, f'{is_downmix} -f wav - | oggenc -q {vorbis_quality} - -o "{output_name}".ogg')

# WAV
def run_wav(chosen_file, output_name, is_downmix):
    ffmpeg(chosen_file, f'{is_downmix} "{output_name}".wav')

# MKV
def run_mkv(chosen_file, output_name, is_downmix):
    ffmpeg(chosen_file, f'{is_downmix} -c copy "{output_name}".mkv')

# ALAC
def run_alac(chosen_file, output_name, is_downmix):
    ffmpeg(chosen_file, f'{is_downmix} -c:a alac "{output_name}".m4a')

# CAF
def run_caf(chosen_file, output_name, is_downmix):
    ffmpeg(chosen_file, f'{is_downmix} "{output_name}".caf')

# DTS
def run_dts(chosen_file, dts_bitrate, output_name, is_downmix):
    ffmpeg(chosen_file, f'{is_downmix} -c:a dca -b:a {dts_bitrate}k -strict -2 "{output_name}".dts')

# Speex
def run_speex(chosen_file, output_name, is_downmix):
    ffmpeg(chosen_file, f'{is_downmix} -c:a libspeex "{output_name}".spx')

# MKA
def run_mka(chosen_file, output_name, is_downmix):
    ffmpeg(chosen_file, f'{is_downmix} -c:a copy "{output_name}".mka')