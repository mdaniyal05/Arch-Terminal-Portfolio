export type BootLineStatus = "ok" | "info" | "warn" | "plain";

export interface BootLine {
  text: string;
  status?: BootLineStatus;
  delayMs?: number;
}

export const bootLines: BootLine[] = [
  {
    text: "arch-linux init v6.9.1-hyprland (tty1) — x86_64, CPU: AMD Ryzen 7 5700X",
    status: "plain",
    delayMs: 80,
  },
  {
    text: "CPU: 8 cores / 16 threads — base 3.4 GHz, boost 4.6 GHz, L3 cache 32 MB",
    status: "info",
    delayMs: 120,
  },
  {
    text: "microcode: AMD 0x0A20120A — patch level 0x0A20120A, revision 0x8600106",
    status: "ok",
    delayMs: 110,
  },
  {
    text: "ACPI: BIOS revision 0x5 — OEM ID: GBT, table checksum 0x4E, DSDT v1.0",
    status: "info",
    delayMs: 130,
  },
  {
    text: "SMBIOS 3.3 — board: B550M DS3H, BIOS F20 dated 10/29/2025",
    status: "ok",
    delayMs: 100,
  },
  {
    text: "PCIe: Root port 0:1 — Gen4 x16 @ 16 GT/s, lane reversal disabled, ASPM L1",
    status: "info",
    delayMs: 140,
  },
  {
    text: "IOMMU: AMD-Vi enabled — IVHD table at 0x7F8E2000, interrupt remapping active",
    status: "ok",
    delayMs: 130,
  },
  {
    text: "KASLR: RNG seed 0x9F2B8C4D — kernel offset 0x3C000000 (randomized)",
    status: "ok",
    delayMs: 110,
  },
  {
    text: "rcu: Preemptible RCU — qhimark=10000, qlowmark=100, GP stall timeout 21s",
    status: "plain",
    delayMs: 100,
  },
  {
    text: "clocksource: tsc-early (freq 3393.6 MHz) — skew 0.18 ppm, invariant TSC",
    status: "info",
    delayMs: 120,
  },
  {
    text: "pcieport 0000:00:01.0: PME D0/D3hot/D3cold — AER cap 0x138, ECRC enabled",
    status: "ok",
    delayMs: 110,
  },
  {
    text: "nvme 0000:02:00.0: WD_BLACK SN770 — firmware 731100WD, max queues 8",
    status: "ok",
    delayMs: 130,
  },
  {
    text: "nvme0n1: NVM subsys NQN: nqn.2021-08.com.wdc:SN770, size 953.9 GiB",
    status: "ok",
    delayMs: 120,
  },
  {
    text: "nvme0n1p1: vfat LABEL=EFI — UUID=67C3-1A0F, sectors 2048..1050623",
    status: "ok",
    delayMs: 110,
  },
  {
    text: "nvme0n1p2: ext4 LABEL=ROOT — UUID=a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    status: "ok",
    delayMs: 130,
  },
  {
    text: "ext4: mounted ROOT with ordered data mode — journal checksum, inode size 256",
    status: "info",
    delayMs: 150,
  },
  {
    text: "block: blk-mq v6.9.1 — NVMe driver using MSI-X irq 32-39, queue depth 1024",
    status: "ok",
    delayMs: 100,
  },
  {
    text: "initramfs: unpacking cpio archive (size 92.1 MiB) — crc32 verified",
    status: "info",
    delayMs: 140,
  },
  {
    text: "firmware: loading amdgpu/renoir_dmcub.bin — DMCUB firmware v1.0.0",
    status: "ok",
    delayMs: 120,
  },
  {
    text: "drm: amdgpu — Radeon RX 9600 (ASUS) — VRAM 16GB, GTT 2GB, rev 0x03",
    status: "info",
    delayMs: 130,
  },
  {
    text: "amdgpu: PSP firmware loaded — TA_RAP, TA_SECURE_OS, TA_ASD",
    status: "ok",
    delayMs: 110,
  },
  {
    text: "fb0: amdgpudrmfb — resolution 1920x1080@60Hz, pixel clock 148.5 MHz",
    status: "ok",
    delayMs: 140,
  },
  {
    text: "snd_hda_intel: codec Realtek ALC897 — EQ params loaded, DSP path 0x4",
    status: "info",
    delayMs: 120,
  },
  {
    text: "usb 1-2: new high-speed USB device number 4 using xhci_hcd — 480 Mbps",
    status: "info",
    delayMs: 110,
  },
  {
    text: "usb 1-2: config 1 interface 0 — HID keyboard (boot protocol) claimed",
    status: "ok",
    delayMs: 130,
  },
  {
    text: "usb 1-3: Logitech G502 HERO — polling rate 1000Hz, battery N/A (wired)",
    status: "ok",
    delayMs: 120,
  },
  {
    text: "r8169 0000:03:00.0: Realtek RTL8168h/8111h — firmware rtl8168h-2.fw",
    status: "ok",
    delayMs: 110,
  },
  {
    text: "r8169: MAC 1A:2B:3C:4D:5E:6F — link up at 1 Gbps, full duplex, flow control",
    status: "ok",
    delayMs: 140,
  },
  {
    text: "iwlwifi: not present — skipping wireless initialization",
    status: "info",
    delayMs: 100,
  },
  {
    text: "pam: auth module pam_unix — SHA512 shadow hash verified for 'arch'",
    status: "info",
    delayMs: 130,
  },
  {
    text: "systemd[1]: procd — /init (pid 1) — cgroup v2 namespace mounted, hybrid cgroup",
    status: "plain",
    delayMs: 110,
  },
  {
    text: "systemd[1]: Condition check for /etc/fstab — 8 entries resolved, no errors",
    status: "ok",
    delayMs: 120,
  },
  {
    text: "mount: /dev/nvme0n1p3 ext4 LABEL=HOME — commit=30, data=ordered, noatime",
    status: "ok",
    delayMs: 140,
  },
  {
    text: "mount: /dev/nvme0n1p4 ext4 LABEL=VAR — noatime, nodiratime, discard",
    status: "ok",
    delayMs: 110,
  },
  {
    text: "swap: /dev/nvme0n1p5 — priority -2, size 16.0 GiB, UUID=5f4e3d2c",
    status: "ok",
    delayMs: 130,
  },
  {
    text: "zram: device zram0 — LZ4 compression, size 8.0 GiB, streams 8",
    status: "info",
    delayMs: 120,
  },
  {
    text: "sysctl: vm.swappiness=10, vfs_cache_pressure=50 — applied from /etc/sysctl.d/99-arch.conf",
    status: "ok",
    delayMs: 110,
  },
  {
    text: "systemd-modules-load: inserted module vfio-pci — unsafe interrupts allowed",
    status: "info",
    delayMs: 150,
  },
  {
    text: "audit: AUDIT_STATUS — backlog limit 8192, lost 0, backlog 0",
    status: "info",
    delayMs: 100,
  },
  {
    text: "dbus-daemon[547]: Activation via systemd — service org.freedesktop.PolicyKit1",
    status: "ok",
    delayMs: 130,
  },
  {
    text: "NetworkManager[623]: <info> [plink 0.9] — rfkill: WWAN disabled",
    status: "ok",
    delayMs: 120,
  },
  {
    text: "NetworkManager[623]: <info> [dhcp4] — lease time 86400, server 192.168.1.1",
    status: "ok",
    delayMs: 140,
  },
  {
    text: "pipewire[789]: module-rt: acquired RT priority 88 — quantum 1024/48000, latency 2ms",
    status: "info",
    delayMs: 110,
  },
  {
    text: "wireplumber[790]: SPA node 'alsa_output.pci-0000_00_1f.3' — route 0:1",
    status: "ok",
    delayMs: 130,
  },
  {
    text: "seatd: VT acquisition on /dev/tty1 — grant seat0 for user 'arch'",
    status: "ok",
    delayMs: 120,
  },
  {
    text: "greetd: executing login session — WAYLAND_DISPLAY=wayland-1 set",
    status: "info",
    delayMs: 150,
  },
  {
    text: "Hyprland[1024]: DRM lease acquired — KMS fd 8, gamma LUT size 4096",
    status: "ok",
    delayMs: 140,
  },
  {
    text: "Hyprland[1024]: renderer: GBM — EGL 1.5, GLES 3.2, vendor AMD",
    status: "info",
    delayMs: 120,
  },
  {
    text: "wlroots: output DP-1 — mode 1920x1080@165Hz, scale 1.0, transform 0",
    status: "ok",
    delayMs: 130,
  },
  {
    text: "systemd[1]: Startup finished in 3.124s (kernel) + 5.213s (initramfs) — 8.337s total",
    status: "plain",
    delayMs: 200,
  },
];
